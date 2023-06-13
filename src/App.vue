<script setup lang="ts">
import Test from "@/components/Global.vue";
import useGlobal from "@/models/global";
const msg = ref("hello world");
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
	{{ msg }}
	<Test />
	<p>app: {{ list }} {{ haha }}</p>
</template>
