<script setup lang="ts">
import Test from "@/components/Test.vue";
import useGlobal from "@/models/global";

const { list, useList, haha, useHaha } = useGlobal();

setTimeout(() => {
  useList("2023");
  useHaha((item: number[]) => {
    item.push(4);
    return item;
  });
}, 2000);
</script>

<template>
  <Test />
  <p>app: {{ list }} {{ haha }}</p>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
