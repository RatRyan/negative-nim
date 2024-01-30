<script setup lang="ts">
const { gameState, goToCharacterCreator } = useGameState();
const { currentArea } = useArea();

onBeforeMount(() => {
	goToCharacterCreator();
});
</script>

<!-- CHANGE SHIT TO WORK URGENT -->

<template>
	<NuxtLayout>
		<!-- I dont like doing this but I can't dynamically render components in Nuxt -->
		<CharacterCreator v-if="gameState == 'CharacterCreator'" />
    <MainGame v-if="gameState == 'MainGame'" />
    <GameOver v-if="gameState == 'GameOver'" :endGameCondition="currentArea.name" :endGameString="currentArea.dialogue"/>
		<!-- <GameOver endGameString="You Win!" endGameCondition="lose" /> -->
	</NuxtLayout>
</template>
