<script setup lang="ts">
import Test from "@/components/Global.vue";
import useGlobal from "@/models/pinia";
const { list, useList, haha, useHaha } = useGlobal();
console.log("-----pinia-----");

console.log(1, list);
setTimeout(() => {
	console.log(3, list);
	useList("hello haha");
	console.log(4, list);
}, 1000);
console.log(2, list);

setTimeout(() => {
	console.log("1.haha", haha);
	useHaha((item) => {
		const attr = [...item];
		attr.push(1000);
		console.log("2.haha", attr);
		return attr;
	});
	console.log("3.haha", haha);
}, 2000);
</script>

<template>
	<Test />
	<p>app: {{ list }} {{ haha }}</p>
</template>
