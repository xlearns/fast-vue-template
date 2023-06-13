<script setup lang="ts">
import Test from "@/components/Global.vue";
import useGlobal from "@/models/global";
const msg = ref("hello world");
const { list, useList, haha, useHaha } = useGlobal();
console.log("-----reative-----");
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

onMounted(() => {
	console.log("1.list", list);
	useList("2023");
	console.log("2.list", list);
});
</script>

<template>
	{{ msg }}
	<Test />
	<p>app: {{ list }} {{ haha }}</p>
</template>
