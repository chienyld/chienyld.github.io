<template>
  <Navbar />
  <div class="md:py-12 max-w-[90%] md:max-w-[70%] m-auto">
    <h2 class="mx-4 text-white text-xl font-semibold my-8">
      與聚華科技的成功合作案例
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 w-full text-white">
      <div
        v-for="project in projects"
        class="hover:scale-105 hover:opacity-90 hover:shadow-2xl tranition ease-in-out duration-200 rounded-[20px] overflow-hidden bg-white/30 backdrop-blur-sm shadow-lg w-[95%] m-auto mb-6 text-center"
      >
        <div class="flex w-full justify-center">
          <img
            :src="project.image"
            class="w-full"
            alt="聚華數位科技"
            loading="lazy"
          />
        </div>
        <div class="p-6">
          <h2 class="text-xl font-bold">{{ project.title }}</h2>
          <div class="py-4 px-4 md:px-12 text-[#ebebeb]">
            <span>
              {{ project.content }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getProjects } from "@/api/index";
import { onMounted } from "vue";

onMounted(async () => {
  const message = await getProjects();
  projects.value = message;
  console.log(message);
});
const projects = ref([]);
</script>

<style lang="scss" scoped></style>
