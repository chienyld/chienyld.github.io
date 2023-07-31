<template>
  <div class="pt-20 md:pt-0">
    <div
      class="absolute left-0 top-0 -z-10 w-full bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-600"
      :class="navHeight"
    ></div>

    <div
      class="m-auto hidden max-w-[80%] justify-between py-4 text-white md:flex"
    >
      <NuxtLink :to="'/'">
        <div
          class="flex gap-2 pt-4 transition delay-100 ease-in-out hover:opacity-70"
        >
          <div class="p-1">
            <img class="h-11 w-11" src="/static/images/logo-gray.svg" alt="" />
          </div>
          <div>
            <h1 class="text-2xl font-bold text-white">聚華數位科技</h1>
            <h2 class="text-sm font-bold">Juhua Digital Ltd.</h2>
          </div>
        </div>
      </NuxtLink>
      <div class="flex min-w-[70%] justify-end gap-4">
        <button
          v-motion
          :initial="initial"
          :enter="{
            scale: 1,
            y: 0,
            opacity: 1,
          }"
          class="col-span-4 p-2.5 px-4 py-4 font-semibold text-white hover:text-indigo-100"
        >
          <NuxtLink :to="'about'">關於聚華</NuxtLink>
        </button>
        <button
          v-motion
          :initial="initial"
          :enter="{
            scale: 1,
            y: 0,
            opacity: 1,
            transition: {
              delay: 200,
            },
          }"
          class="col-span-4 p-2.5 px-4 py-4 font-semibold text-white hover:text-indigo-100"
        >
          <NuxtLink :to="'services'">服務項目</NuxtLink>
        </button>
        <button
          v-motion
          :initial="initial"
          :enter="{
            scale: 1,
            y: 0,
            opacity: 1,
            transition: {
              delay: 400,
            },
          }"
          class="col-span-4 p-2.5 px-4 py-4 font-semibold text-white hover:text-indigo-100"
        >
          <NuxtLink :to="'projects'">最新消息</NuxtLink>
        </button>
        <button
          v-motion
          :initial="initial"
          :enter="{
            scale: 1,
            y: 0,
            opacity: 1,
            transition: {
              delay: 600,
            },
          }"
          class="col-span-4 p-2.5 px-4 py-4 font-semibold text-white hover:text-indigo-100"
        >
          <NuxtLink :to="'projects'">歷年案例</NuxtLink>
        </button>
      </div>
    </div>
    <!--Mobile-->
    <div
      class="fixed top-0 z-30 flex h-24 w-full justify-between bg-purple-800 p-4 shadow-sm md:hidden"
    >
      <NuxtLink :to="'/'">
        <div class="flex gap-2 p-2 hover:opacity-50">
          <div class="p-1 opacity-70">
            <img class="h-11 w-11" src="/static/images/logo-gray.svg" alt="" />
          </div>
          <div>
            <h1 class="text-2xl font-bold text-white">聚華數位科技</h1>
            <h2 class="text-sm font-bold text-white opacity-70">
              Juhua Digital Ltd.
            </h2>
          </div>
        </div>
      </NuxtLink>
      <button @click="toggleMenu" class="flex items-center gap-3 text-white">
        <div
          class="h-12 w-12 flex-none items-center rounded-full bg-white/30 pt-4 shadow backdrop-blur-sm"
        >
          <div :class="{ openTop: isOpen }" class="menu m-auto"></div>
          <div :class="{ hidden: isOpen }" class="menu mx-auto my-1"></div>
          <div :class="{ openBottom: isOpen }" class="menu m-auto"></div>
        </div>
      </button>
    </div>
    <div v-if="isOpen" class="md:hidden">
      <div
        class="fixed z-30 mt-4 h-screen w-full bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-600 pt-12 text-xl"
      >
        <button
          v-motion
          :initial="initial"
          :enter="{
            scale: 1,
            y: 0,
            opacity: 1,
          }"
          class="w-full px-4 py-4 font-semibold text-white"
        >
          <NuxtLink :to="'about'">關於聚華</NuxtLink>
        </button>
        <button
          v-motion
          :initial="initial"
          :enter="{
            scale: 1,
            y: 0,
            opacity: 1,
            transition: {
              delay: 200,
            },
          }"
          class="w-full px-4 py-4 font-semibold text-white"
        >
          <NuxtLink :to="'services'">服務項目</NuxtLink>
        </button>
        <button
          v-motion
          :initial="initial"
          :enter="{
            scale: 1,
            y: 0,
            opacity: 1,
            transition: {
              delay: 400,
            },
          }"
          class="w-full px-4 py-4 font-semibold text-white"
        >
          <NuxtLink :to="'projects'">最新消息</NuxtLink>
        </button>
        <button
          v-motion
          :initial="initial"
          :enter="{
            scale: 1,
            y: 0,
            opacity: 1,
            transition: {
              delay: 600,
            },
          }"
          class="w-full px-4 py-4 font-semibold text-white"
        >
          <NuxtLink :to="'projects'">歷年案例</NuxtLink>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, toRef } from "vue";

const props = defineProps(["navHeight"]);
const navHeight = toRef(props, "navHeight");

const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const initial = ref({
  scale: 0.5,
  y: 100,
  opacity: 0,
});
</script>
