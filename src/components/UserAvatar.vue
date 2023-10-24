<script setup>
import { defineProps } from "vue";
import { CTooltip } from "@coreui/vue";

defineProps({
	user: Object,
	myMessage: Boolean,
});
</script>

<template>
	<CTooltip placement="top" :content="user.firstName">
		<template #toggler="{ on }">
			<img
				v-on="on"
				v-bind:src="user.thumbnail"
				:class="{ mine: myMessage, avatar: true }"
			/>
		</template>
	</CTooltip>
</template>

<style scoped>
.avatar {
	width: 48px;
	height: 48px;
	border-radius: 48px;
	margin-right: 8px;
}
.avatar.mine {
	margin-left: 8px;
	margin-right: 0px;
}
</style>
