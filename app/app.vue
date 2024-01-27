<script setup lang="ts">
const { log } = useMessageLog();

let currentArea = reactive({
  name: 'forest',
  dialogue: 'you awake in a yada yada',
  actions: ['town'],
});
const userInput = ref('');
const error = ref('');

function performCommand() {
  error.value = '';
  const inputSequence = userInput.value.split(' ');
  switch (inputSequence[0].toLowerCase()) {
    case 'move':
      loadArea(inputSequence[1]);
      break;
    default:
      error.value = 'unknown command';
  }
  userInput.value = '';
}

function loadArea(newArea: string) {
  if (newArea == undefined) {
    error.value = 'no place specified!';
    return;
  }
  if (!currentArea.actions.includes(newArea.toLowerCase())) {
    error.value = "that place doesn't exist!";
    return;
  }
  areas.forEach((area, index) => {
    if (area.name == newArea.toLowerCase()) {
      currentArea = areas[index];
      return;
    }
  });
}
</script>

<template>
  <div>
    <NuxtPage />
    <h1>negative nim</h1>
    <span>{{ currentArea.dialogue }}</span>
    <p>What would you like to do?</p>
    <input @keyup.enter="performCommand()" type="text" v-model="userInput" />
    <p>{{ error }}</p>
  </div>
</template>
