<template>
  <Navbar />
  <section id="first" class="h-screen text-gray-100 w-[85%] m-auto">
    <h3 class="text-2xl font-bold my-4">關於聚華</h3>
    <h3 class="text-lg font-bold my-4">我們的使命：</h3>
    <h3>
      聚華的使命是成為客戶在數位轉型旅程中的最佳夥伴。我們致力於運用最新的技術，結合我們卓越的專業知識，為客戶提供最具競爭力的軟體解決方案，幫助他們在日益變化的市場中取得成功。
    </h3>
    <h3 class="text-lg font-bold my-4">核心價值觀：</h3>
    <h3 class="text-md font-semibold my-2">創新：</h3>
    <h3>
      我們鼓勵員工不斷追求創新，並提供一個開放的環境，讓他們能夠提出新點子、新方法，以滿足不斷變化的市場需求。
    </h3>

    <h3 class="text-md font-semibold my-2">品質：</h3>
    <h3>
      品質始終是我們最重要的承諾。我們嚴格遵循軟體開發最佳實踐，確保我們交付的產品和服務一直處於高水準。
    </h3>

    <h3 class="text-md font-semibold my-2">客戶至上：</h3>
    <h3>
      我們的成功來自於客戶的成功。我們與客戶建立長期的合作夥伴關係，深入了解他們的需求，提供量身定制的解決方案。
    </h3>

    <h3 class="text-md font-semibold my-2">團隊合作：</h3>
    <h3>
      我們重視團隊合作，相信多樣性和共享知識能夠激發創意。在聚華科技，我們鼓勵互相支持和共同成長。
    </h3>

    <img
      class="h-44 w-full absolute -left-3 top-[130vh] md:top-2/3 z-10"
      src="/static/images/bubble.svg"
      alt=""
    />
  </section>
</template>

<script setup>
import { getProjects } from "@/api/index";
import { onMounted } from "vue";

onMounted(async () => {
  const message = await getProjects();
  console.log(message);
});
</script>

<style lang="scss" scoped></style>
