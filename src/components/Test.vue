<script setup lang="ts">
import useGlobal from "@/models/global";
const { list, useList, useHaha } = useGlobal();

setTimeout(() => {
  useList("okok");
  useHaha((item) => {
    item.push(1000);
    return item;
  });
}, 6000);
</script>
<template>test: {{ list }}</template>
