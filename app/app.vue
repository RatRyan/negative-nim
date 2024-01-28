<script setup lang="ts">
const { hasCharacter } = useGame();
</script>

<template>
  <div>
    <h1>negative nim</h1>
    <span>{{ currentArea.dialogue }}</span>
    <p>What would you like to do?</p>
    <input type="text" v-model="userInput" />
    <button @click="performCommand()">submit</button>
    <p>{{ error }}</p>
  </div>
</template>
