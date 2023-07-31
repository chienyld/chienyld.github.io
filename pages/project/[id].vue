<template>
  <div
    class="-z-10 w-full bg-gradient-to-tr from-indigo-800 via-purple-800 to-pink-600"
  >
    <Navbar />
    <Bubbles />
    <div class="m-auto min-h-screen max-w-[90%] py-8 md:max-w-[70%]">
      <div class="w-full">
        <div class="py-2">
          {{ currentData }}
        </div>
        <div class="py-2">
          {{ project }}
        </div>
        <div class="py-2">
          <label for="" class="px-1 text-white">標題</label>
          <input
            v-model="project.title"
            type="text"
            class="w-full rounded-xl bg-white/30 px-6 py-2 text-left text-white shadow-lg backdrop-blur-sm focus:bg-white/20"
          />
        </div>
        <div class="py-2">
          <label for="" class="px-1 text-white">副標題</label>
          <input
            v-model="project.subtitle"
            type="text"
            class="w-full rounded-xl bg-white/30 px-6 py-2 text-left text-white shadow-lg backdrop-blur-sm focus:bg-white/20"
          />
        </div>
        <div class="py-2">
          <label for="" class="px-1 text-white">內容</label>
          <input
            v-model="project.content"
            type="text"
            class="w-full rounded-xl bg-white/30 px-6 py-2 text-left text-white shadow-lg backdrop-blur-sm focus:bg-white/20"
          />
        </div>
      </div>
      <div class="flex w-full justify-center py-4">
        <button
          @click="() => submit()"
          class="text-md overflow-hidden rounded-xl bg-pink-500 px-12 py-0 font-bold leading-10 text-white shadow transition delay-150 ease-in-out hover:bg-pink-700"
        >
          確認
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { putProject, getProject } from "@/api/index";
import { ref, onMounted } from "vue";

onMounted(async () => {
  const res = await getProject(id);
  currentData.value = res;
});
const { id } = useRoute().params;
const currentData = ref({
  title: "",
  subtitle: "",
  content: "",
  image: "",
});
const project = ref({
  id:id,
  title: "",
  subtitle: "",
  content: "",
  image: "https://source.unsplash.com/featured/300x300",
});
const submit = async () => {
  const res = await putProject(id, project.value);
  console.log(res);
};
</script>
