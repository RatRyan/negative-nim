<script setup lang="ts">
const { hasCharacter } = useGame();
</script>

<template>
  <NuxtLayout>
    <CharacterCreator v-if="!hasCharacter"></CharacterCreator>
    <MainGame v-else></MainGame>
  </NuxtLayout>
</template>
