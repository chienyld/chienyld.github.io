<template>
  <div>
    <div class="m-auto w-full max-w-[80%] pb-8 pt-24 md:max-w-[70%]">
      <h2 class="text-[1.6rem] font-bold text-yellow-300 md:text-[2rem]">
        我的技能
      </h2>
      <h2 class="text-xl font-bold text-yellow-300">Skills</h2>
      <h2 class="mt-4 text-[1rem] font-medium text-gray-200">
        熱愛WEB相關技術，<br
          class="md:hidden"
        />前端主要熟悉Vue框架的開發，<br />同時也不斷探索各種不同的後端技術。
      </h2>
    </div>
    <div
      class="m-auto grid w-full max-w-[85%] grid-cols-1 text-white md:max-w-[70%] md:grid-cols-3"
    >
      <div
        class="tranition m-auto mb-6 w-[95%] overflow-hidden rounded-[20px] bg-white/30 p-8 text-center shadow-lg backdrop-blur-sm duration-200 ease-in-out hover:scale-105 hover:opacity-90 hover:shadow-2xl"
      >
        <div class="flex w-full justify-center pb-3">
          <WebsiteIcon class="h-14 w-14" />
        </div>
        <h2 class="text-xl font-bold text-yellow-300">前端</h2>
        <div class="px-4 py-4 leading-loose text-[#ebebeb]">
          <h3>HTML</h3>
          <h3>JavaScript | Vue</h3>
          <h3>CSS | Tailwind</h3>
          <h3>Element UI</h3>
        </div>
      </div>
      <div
        class="tranition m-auto mb-6 w-[95%] overflow-hidden rounded-[20px] bg-white/30 p-8 text-center shadow-lg backdrop-blur-sm duration-200 ease-in-out hover:scale-105 hover:opacity-90 hover:shadow-2xl"
      >
        <div class="flex w-full justify-center pb-3">
          <DatabaseIcon class="h-14 w-14 p-1" />
        </div>
        <h2 class="text-xl font-bold text-yellow-300">後端</h2>
        <div class="px-4 py-4 leading-loose text-[#ebebeb]">
          <h3>PHP | Laravel</h3>
          <h3>Node JS | Express</h3>
          <h3>Python | Django</h3>
          <h3>MySQL</h3>
        </div>
      </div>
      <div
        class="tranition m-auto mb-6 w-[95%] overflow-hidden rounded-[20px] bg-white/30 p-8 text-center shadow-lg backdrop-blur-sm duration-200 ease-in-out hover:scale-105 hover:opacity-90 hover:shadow-2xl"
      >
        <div class="flex w-full justify-center pb-3">
          <ToolIcon class="h-14 w-14 p-1" />
        </div>
        <h2 class="text-xl font-bold text-yellow-300">工具</h2>
        <div class="px-4 py-4 leading-loose text-[#ebebeb]">
          <h3>Git</h3>
          <h3>Vite</h3>
          <h3>Docker</h3>
          <h3>Figma</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
