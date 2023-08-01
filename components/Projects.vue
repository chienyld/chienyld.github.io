<template>
  <div class="m-auto max-w-[80%] py-8 md:max-w-[70%]">
    <h2 class="text-[1.6rem] font-bold text-yellow-300 md:text-[2rem]">
      作品集
    </h2>
    <h2 class="text-xl font-bold text-yellow-300">Portfolio</h2>
    <br />
    <div class="grid w-full grid-cols-1 text-white md:grid-cols-3">
      <div
        v-for="project in projects"
        class="tranition m-auto mb-6 w-[95%] overflow-hidden rounded-[20px] bg-white/30 text-center shadow-lg backdrop-blur-sm duration-200 ease-in-out hover:scale-105 hover:opacity-90 hover:shadow-2xl"
      >
        <div class="flex h-64 w-full justify-center md:h-80">
          <img
            :src="project.image"
            class="w-full object-cover"
            alt="聚華數位科技"
            loading="lazy"
          />
        </div>
        <div class="h-44 overflow-hidden px-8 py-6">
          <h2 class="text-xl font-bold">{{ project.title }}</h2>
          <div class="h-[90px] overflow-hidden py-4 text-[#ebebeb]">
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

const projects = ref([]);
const dataFetcher = async () => {
  projects.value = await getProjects();
};
dataFetcher();
</script>
