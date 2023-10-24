import { createRouter, createWebHashHistory } from "vue-router";
import ChatRoom from "@/views/ChatRoom.vue";

const routes = [
	{
		path: "/",
		name: "ChatRoom",
		component: ChatRoom,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
