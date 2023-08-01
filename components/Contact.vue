<template>
  <div class="m-auto w-full max-w-[80%] py-24 md:max-w-[70%]">
    <h2 class="text-[1.6rem] font-bold text-yellow-300 md:text-[2rem]">
      聯絡我
    </h2>
    <h2 class="text-xl font-bold text-yellow-300">Contact</h2>
    <div class="w-full gap-12 py-12 text-lg font-bold text-gray-200 md:flex">
      <div class="m-auto mb-8 h-32 w-32 overflow-hidden rounded-full md:m-0">
        <img src="/static/images/me.png" alt="" />
      </div>
      <div>
        <div class="flex items-center gap-2 py-2">
          <Mail />
          <h3>12345zox@gmail.com</h3>
        </div>
        <div class="flex items-center gap-2 py-2">
          <Phone />
          <h3>+886 908150818</h3>
        </div>
        <div class="flex items-center gap-2 py-2">
          <Location />
          <h3>Taichung &nbsp;| &nbsp;Hsinchu</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
