<script setup lang="ts">
const { gameState } = useGame();
</script>

<template>
  <NuxtLayout>
    <CharacterCreator v-if="gameState == 'CharacterCreator'" />
    <MainGame v-if="gameState == 'MainGame'" />
    <GameOver v-if="gameState == 'GameOver'" />
  </NuxtLayout>
</template>
