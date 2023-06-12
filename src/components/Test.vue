<script setup lang="ts">
import useGlobal from "@/models/global";
const { list, useList } = useGlobal();

setTimeout(() => {
	useList("ok");
}, 6000);
</script>
<template>test: {{ list }}</template>
