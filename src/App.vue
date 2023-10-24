<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";

const store = useStore();

onMounted(() => {
	store.dispatch("setCurrentUser");
});
</script>

<template>
	<router-view />
</template>

<style>
html {
	background-color: #FAFAFA;
	font-size: 16px;
	font-family: inter;
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
