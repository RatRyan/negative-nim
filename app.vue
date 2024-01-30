<script setup lang="ts">
const { gameState } = useGame();
</script>

<template>
  <NuxtLayout>
    <!-- I dont like doing this but I can't dynamically render components in Nuxt -->
    <CharacterCreator v-if="gameState.component == 'CharacterCreator'" />
    <MainGame v-if="gameState.component == 'MainGame'" />
    <GameOver v-if="gameState.component == 'GameOver'" />
  </NuxtLayout>
</template>
