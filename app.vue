<script setup lang="ts">
const { gameState } = useGameState();
</script>

<template>
  <NuxtLayout>
    <!-- I dont like doing this but I can't dynamically components renders in Nuxt -->
    <CharacterCreator v-if="gameState == 'CharacterCreator'" />
    <MainGame v-if="gameState == 'MainGame'" />
    <GameOver v-if="gameState == 'GameOver'" />
  </NuxtLayout>
</template>
