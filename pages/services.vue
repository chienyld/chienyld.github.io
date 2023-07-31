<template>
  <div class="service">
    <div
      class="-z-10 min-h-screen w-full bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-600"
    >
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
