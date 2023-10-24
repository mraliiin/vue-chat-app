<script setup>
import { ref, defineEmits } from "vue";
const emit = defineEmits(["submit"]);

const message = ref("");

const sendMessage = () => {
	const textMessage = message.value.replace(/^\s+|\s+$/g, "");
	if (textMessage) {
		emit("submit", textMessage);
		message.value = "";
	}
};
</script>

<template>
	<div class="input-container">
		<div class="input-field">
			<textarea
				class="input"
				rows="3"
				v-model="message"
				placeholder="Type your message..."
				@keyup.enter="sendMessage"
			/>
		</div>
		<div class="send">
			<img class="icon" src="@/assets/icons/send.svg" @click="sendMessage" />
		</div>
	</div>
</template>

<style scoped>
.input-container {
	outline: none;
	height: 60px;
	font-size: 14px;
	display: flex;
	overflow: hidden;
}

.input-field {
	padding-left: 12px;
	height: 100%;
	flex: 1;
	border: 1px solid #e8e8e8;
	background-color: #f6f6f6;
	border-radius: 8px;
}

.input {
	border: none;
	outline: none;
	background-color: transparent;
	height: 100%;
	width: 100%;
	font-size: 14px;
	padding: 8px;
	resize: none;
}

.input-field::-webkit-input-placeholder {
	color: #bdbdbd;
}

.input-field::-moz-input-placeholder {
	color: #bdbdbd;
}

.input-field::-ms-input-placeholder {
	color: #bdbdbd;
}

.send {
	height: 100%;
	width: 60px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: 12px;
}

.icon {
	width: 30px;
	height: 30px;
}
</style>
