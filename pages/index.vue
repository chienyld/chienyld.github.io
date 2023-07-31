<template>
  <div class="scrollbar-hide w-screen overflow-x-hidden">
    <Navbar :navHeight="'h-[300vh] md:h-[200vh]'" />
    <Bubbles />
    <section id="first" class="h-screen">
      <div class="m-auto w-[80%] text-[1.6rem] text-white md:text-[2rem]">
        <div class="h-[90vh] md:grid md:grid-cols-5">
          <div class="mt-[20%] font-bold leading-loose md:col-span-2 md:mt-40">
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
              聚華數位科技提供多樣化資訊服務
            </h2>
            <h2
              class="mt-4 text-[18px]"
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
            >
              幫助您建置系統，提升營運效率、降低管理成本，搭上數位時代的順風車。
            </h2>
            <div class="mt-32 flex justify-center md:justify-start">
              <a href="#second">
                <button
                  class="overflow-hidden rounded-xl bg-pink-500 px-8 py-1 text-[18px] leading-10 text-white shadow transition delay-150 ease-in-out hover:bg-pink-700"
                >
                  瞭解更多
                </button>
              </a>
            </div>
          </div>
          <div class="relative hidden w-full md:col-span-3 md:block">
            <img
              class="absolute h-full w-full"
              src="/static/images/main.svg"
              alt=""
            />
            <img
              class="absolute right-[160px] top-[250px] m-auto h-14 w-16 animate-bounce"
              src="/static/images/part1.png"
              alt=""
            />
            <img
              class="absolute right-[300px] top-[280px] m-auto h-6 w-4 animate-[bounce_5s_linear_infinite]"
              src="/static/images/part2.png"
              alt=""
            />
            <img
              class="absolute right-[260px] top-[360px] m-auto h-16 w-12 animate-[bounce_3s_linear_infinite]"
              src="/static/images/part3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <section id="second">
      <Services />
    </section>
  </div>
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
