<script setup lang="ts">
defineProps({
	endGameString: String,
  endGameCondition: String,
});


</script>
<template>
	<p>{{ endGameString }}</p>
  <h1 v-if="endGameCondition === 'win'">𝖄𝖔𝖚 𝖂𝖎𝖓!</h1>
  <h1 v-else>𝖄𝖔𝖚 𝕷𝖔𝖘𝖊!</h1>
</template>

<style scoped>
  
</style>