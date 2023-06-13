import { createRouter, createWebHashHistory } from "vue-router";
import piniaGstate from "@/pages/pinia-gstate.vue";
import refGstate from "@/pages/ref-gstate.vue";

const routes = [
	{ path: "/pinia", component: piniaGstate },
	{ path: "/ref", component: refGstate },
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
});
