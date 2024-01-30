<script setup lang="ts">
defineProps({
	endGameString: String,
	endGameCondition: String,
});
</script>
<template>
	<div class="content">
		<div class="win-condition">
			<h1 v-if="endGameCondition === 'win'">𝖄𝖔𝖚 𝖂𝖎𝖓!</h1>
			<h1 v-else>𝖄𝖔𝖚 𝕷𝖔𝖘𝖊!</h1>
		</div>
		<div class="game-over-status">
			<h2>{{ endGameString }}</h2>
		</div>
	</div>
</template>

<style scoped>
.content {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	align-items: center;
	height: 65vh;
}
</style>
