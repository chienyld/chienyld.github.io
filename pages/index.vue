<template>
  <Navbar />
  <section id="first">
    <div class="w-[80%] m-auto text-white text-[1.6rem] md:text-[2rem]">
      <div class="md:grid md:grid-cols-5 h-[90vh]">
        <div class="md:col-span-2 mt-[20%] md:mt-40 leading-loose font-bold">
          <h2
            v-motion
            :initial="initial"
            :enter="{
              scale: 1,
              y: 0,
              opacity: 1,
            }"
          >
            用對的方法，做對的事。
          </h2>
          <h2
            v-motion
            :initial="initial"
            :enter="{
              scale: 1,
              y: 0,
              opacity: 1,
              transition: {
                delay: 300,
              },
            }"
          >
            聚華數位科技提供多樣化資訊服務。
          </h2>
          <h2
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
            class="text-[18px] mt-4"
          >
            WEB客製化網站系統 / APP應用程式等開發
          </h2>
          <NuxtLink :to="'services'">
            <button
              class="leading-10 px-8 py-1 mt-32 text-[18px] rounded-xl overflow-hidden bg-pink-500 hover:bg-pink-700 shadow text-white transition ease-in-out delay-150"
            >
              瞭解更多
            </button>
          </NuxtLink>
        </div>
        <div class="hidden md:block relative md:col-span-3 w-full">
          <img
            class="absolute h-full w-full"
            src="/static/images/main.svg"
            alt=""
          />
          <img
            class="absolute animate-bounce m-auto h-14 w-16 right-[160px] top-[250px]"
            src="/static/images/part1.png"
            alt=""
          />
          <img
            class="absolute animate-bounce m-auto h-6 w-4 right-[300px] top-[280px]"
            src="/static/images/part2.png"
            alt=""
          />
          <img
            class="absolute animate-bounce m-auto h-16 w-12 right-[260px] top-[360px]"
            src="/static/images/part3.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  <section id="second">
    <div></div>
  </section>
</template>

<script setup>
let id = ref();
const initial = ref({
  scale: 0.5,
  y: 100,
  opacity: 0,
});
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
