<template>
  <div
    class="-z-10 w-full bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-600"
  >
    <Navbar :navHeight="navHeight" />
    <Bubbles />
    <div class="m-auto max-w-[90%] py-8 md:max-w-[70%]">
      <h2 class="mx-2 my-8 text-xl font-semibold text-white md:text-2xl">
        與聚華科技的成功合作案例
      </h2>
      <br />
      <div class="grid w-full grid-cols-1 text-white md:grid-cols-3">
        <div
          v-for="project in projects"
          class="tranition m-auto mb-6 w-[95%] overflow-hidden rounded-[20px] bg-white/30 text-center shadow-lg backdrop-blur-sm duration-200 ease-in-out hover:scale-105 hover:opacity-90 hover:shadow-2xl"
        >
          <NuxtLink :to="'/project/' + project.id">
            <div class="flex h-64 w-full justify-center md:h-80">
              <img
                :src="project.image"
                class="w-full object-cover"
                alt="聚華數位科技"
                loading="lazy"
              />
            </div>
            <div class="p-6">
              <h2 class="text-xl font-bold">{{ project.title }}</h2>
              <div class="px-4 py-4 text-[#ebebeb] md:px-12">
                <span>
                  {{ project.content }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getProjects } from "@/api/index";

const projects = ref([]);
const navHeight = ref("h-screen md:h-screen");
const dataFetcher = async () => {
  projects.value = await getProjects();
  console.log(projects.value);
  navHeight.value = String(
    "h-[" +
      70 * projects.value.length +
      "vh] md:h-[" +
      70 * projects.value.length +
      "vh]"
  );
};
dataFetcher();
</script>
