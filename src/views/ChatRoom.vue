<script setup>
import { useStore } from "vuex";
import { computed, onBeforeMount, ref } from "vue";

import ComposeMessage from "../components/ComposeMessage.vue";
import ChatBubble from "../components/ChatBubble.vue";

const chatContent = ref();
const store = useStore();
const chats = computed(() => store.state.chatsModule.chats);
const currentUser = computed(() => store.state.chatsModule.currentUser);

onBeforeMount(() => {
	store.dispatch("initChats");
});

const sendReply = (message) => {
	const newMessage = {
		message: message,
		from: currentUser,
		date: new Date(),
	};

	store.dispatch("sendMessage", newMessage).then(() => {
		// Scroll to the most recent message
		const bottomElement = chatContent.value.lastElementChild;
		bottomElement?.scrollIntoView({
			behavior: "smooth",
		});
	});
};
</script>

<template>
	<div class="chat-container">
		<div class="chat-room">
			<main class="chat-content" ref="chatContent">
				<ChatBubble
					v-for="chat in chats"
					:key="chat.id"
					:message="chat.message"
					:user="chat.from"
					:myMessage="chat?.from?.id === currentUser?.id"
				/>
			</main>
			<footer class="chat-footer">
				<ComposeMessage :sender="currentUser" @submit="sendReply" />
			</footer>
		</div>
	</div>
</template>

<style scoped>
.chat-container {
	height: 100vh;
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
}

.chat-room {
	min-height: 400px;
	width: 500px;
	max-height: 80%;
	max-width: 800px;
}

.chat-content {
	height: 80%;
	overflow-y: scroll;
	padding-bottom: 20px;
	box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
	border-radius: 8px;
	padding: 8px;
}

.chat-footer {
	height: 10%;
	margin-top: 8px;
}

@media only screen and (max-width: 768px) {
	.chat-container {
		width: 100%;
	}

	.chat-room {
		max-height: 80%;
		max-width: 90%;
	}
}
</style>
