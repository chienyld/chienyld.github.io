<template>
  <div class="scrollbar-hide w-screen overflow-x-hidden">
    <Navbar :navHeight="'h-[300vh] md:h-[200vh]'" />
    <Bubbles />
    <section id="first" class="h-screen">
      <div class="m-auto w-[80%] text-[1.6rem] text-white md:text-[2rem]">
        <div class="h-[90vh] md:grid md:grid-cols-5">
          <div class="mt-40 font-bold md:col-span-2">
            <h2
              class="my-6 text-5xl md:text-7xl"
              v-motion
              :initial="initial"
              :enter="{
                scale: 1,
                y: 0,
                opacity: 1,
              }"
            >
              Hi,
            </h2>
            <h2
              class="my-6 text-5xl md:text-6xl"
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
              我是林謙佑，
            </h2>
            <h2
              class="my-6 mt-4 text-2xl text-yellow-300 md:text-3xl"
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
              一名網路系統開發工程師。
            </h2>
            <div class="mt-32 flex justify-center md:justify-start">
              <a href="#second">
                <button
                  class="flex items-center gap-1 overflow-hidden rounded-xl bg-yellow-500 px-8 py-1 text-[18px] leading-10 text-white shadow transition delay-150 ease-in-out hover:bg-yellow-600"
                >
                  關於我
                  <DownArrow />
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
    <section id="third">
      <Experience />
    </section>
    <section id="fourth">
      <Projects />
    </section>
    <section id="fifth">
      <Contact />
    </section>
    <MyFooter />
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
