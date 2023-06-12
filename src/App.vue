<script setup lang="ts">
import Test from "@/components/Test.vue";
import useGlobal from "@/models/global";

const { list, useList, haha, useHaha } = useGlobal();

setTimeout(() => {
  useList("2023");
  useHaha((item) => {
    item.push(4);
    return item;
  });
}, 2000);
</script>

<template>
  <Test />
  <p>app: {{ list }} {{ haha }}</p>
</template>
