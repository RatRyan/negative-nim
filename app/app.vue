<script setup>
const dialogue = ref('');
const error = ref('');
const userInput = ref('');
const command = reactive({
  action: '',
  target: '',
});

function performCommand() {
  const inputSequence = userInput.value.split(' ');

  command.action = inputSequence[0];
  command.target = inputSequence[2];

  userInput.value = '';
}
</script>

<template>
  <div>
    <h1>negative nim</h1>
    <span>{{ dialogue }}</span>
    <p>What would you like to do?</p>
    <input type="text" v-model="userInput" />
    <button @click="performCommand(userInput)">submit</button>
    <p>{{ error }}</p>
  </div>
</template>
