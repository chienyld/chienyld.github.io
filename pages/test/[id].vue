<template>
  <div>
    <h1>this is about {{ id }}</h1>
  </div>
</template>

<script setup>
const { id } = useRoute().params;
</script>

<style scoped>
* {
  background-color: aqua;
}
</style>
