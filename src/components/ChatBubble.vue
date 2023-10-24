<script setup>
import { defineProps } from "vue";
import UserAvatar from "./UserAvatar.vue";

defineProps({
	message: String,
	user: Object,
	myMessage: Boolean,
});
</script>

<template>
	<div class="container" :class="{ 'flex-end': myMessage }">
		<UserAvatar :user="user" :myMessage="false" v-if="!myMessage" />

		<div
			class="message-bubble"
			:style="
				myMessage ? 'background-color: #a7c4f4' : 'background-color: #eeeeee'
			"
		>
			<p class="message-text">{{ message }}</p>
		</div>

		<UserAvatar :user="user" :myMessage="true" v-if="myMessage" />
	</div>
</template>

<style scoped>
.container {
	margin-bottom: 16px;
	display: flex;
	align-items: center;
}

.flex-end {
	justify-content: flex-end;
}

.message-bubble {
	width: auto;
	max-width: 60%;
	border-radius: 8px;
	padding: 8px;
}

.message-text {
	font-size: 14px;
	white-space: pre-line;
	word-wrap: break-word;
}
</style>
