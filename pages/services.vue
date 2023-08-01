<template>
  <div class="service">
    <div class="-z-10 min-h-screen w-full bg-[#28282B]">
      <Navbar :navHeight="'h-screen md:h-screen'" />
      <Services />
      <MyFooter />
    </div>
  </div>
</template>

<script setup></script>
<style>
.service {
  overflow: hidden !important;
}
</style>
