<template>
  <div>
    <div class="absolute -z-[1] w-screen overflow-x-hidden h-[200vh]">
      <img
        class="animate-[bounce_10s_linear_infinite] duration-500 h-[50vh] w-[55vh] md:h-[50vw] md:w-[57vw] -left-[20vh] md:-left-[20vw] absolute top-[50vh] opacity-50 -z-[1]"
        src="/static/images/bubble.svg"
        alt=""
      />
      <img
        class="animate-[bounce_15s_linear_infinite] duration-500 h-[50vh] w-[55vh] md:h-[45vw] md:w-[50vw] -right-10 absolute top-[70vh] opacity-50 -z-[1]"
        src="/static/images/bubble2.svg"
        alt=""
      />
    </div>
    <div
      class="w-full md:min-h-[200vh] min-h-[300vh] absolute left-0 top-0 -z-10 bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-600"
    ></div>

    <div
      class="hidden md:flex max-w-[80%] m-auto py-4 text-white justify-between"
    >
      <NuxtLink :to="'/'">
        <div
          class="pt-4 flex gap-2 hover:opacity-70 transition ease-in-out delay-100"
        >
          <div class="p-1">
            <img class="w-11 h-11" src="/static/images/logo-gray.svg" alt="" />
          </div>
          <div>
            <h1 class="text-white font-bold text-2xl">聚華數位科技</h1>
            <h2 class="text-sm font-bold">Juhua Digital Corp.</h2>
          </div>
        </div>
      </NuxtLink>
      <div class="min-w-[70%] flex justify-end gap-4">
        <button
          v-motion
          :initial="initial"
          :enter="{
            scale: 1,
            y: 0,
            opacity: 1,
          }"
          class="p-2.5 col-span-4 text-white font-medium py-4 px-4 hover:text-indigo-100"
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
          class="p-2.5 col-span-4 text-white font-medium py-4 px-4 hover:text-indigo-100"
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
          class="p-2.5 col-span-4 text-white font-medium py-4 px-4 hover:text-indigo-100"
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
          class="p-2.5 col-span-4 text-white font-medium py-4 px-4 hover:text-indigo-100"
        >
          <NuxtLink :to="'projects'">歷年案例</NuxtLink>
        </button>
      </div>
    </div>
    <!--Mobile-->
    <div class="md:hidden w-full flex justify-between p-4">
      <div class="flex gap-2 p-2 hover:opacity-50">
        <div class="p-1 opacity-70">
          <img class="w-11 h-11" src="/static/images/logo-gray.svg" alt="" />
        </div>
        <div>
          <h1 class="text-white font-bold text-2xl">聚華數位科技</h1>
          <h2 class="text-sm font-bold text-white opacity-70">
            Juhua Digital Corp.
          </h2>
        </div>
      </div>
      <button @click="toggleMenu" class="flex items-center text-white gap-3">
        <div
          class="rounded-full bg-white/30 backdrop-blur-sm shadow h-12 w-12 flex-none items-center pt-4"
        >
          <div :class="{ openTop: isOpen }" class="menu m-auto"></div>
          <div :class="{ hidden: isOpen }" class="menu my-1 mx-auto"></div>
          <div :class="{ openBottom: isOpen }" class="menu m-auto"></div>
        </div>
      </button>
    </div>
    <div v-if="isOpen" class="md:hidden">
      <div class="min-w-[70%] h-screen text-xl pt-12">
        <button
          v-motion
          :initial="initial"
          :enter="{
            scale: 1,
            y: 0,
            opacity: 1,
          }"
          class="w-full text-white font-medium py-4 px-4"
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
          class="w-full text-white font-medium py-4 px-4"
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
          class="w-full text-white font-medium py-4 px-4"
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
          class="w-full text-white font-medium py-4 px-4"
        >
          <NuxtLink :to="'projects'">歷年案例</NuxtLink>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
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
