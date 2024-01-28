<script setup lang="ts">
const command = ref();
const commandHistory = ref<string[]>([]);

function executeCommand() {
  commandHistory.value.push(command.value);
  command.value = '';
}
</script>

<template>
  <div class="wrapper">
    <div class="command-line">
      <div class="history">
        <p v-for="command in commandHistory.slice().reverse()">> {{ command }}</p>
      </div>
      <input
        @keyup.enter="executeCommand()"
        type="text"
        v-model="command"
        placeholder="enter command here..."
      />
    </div>
    <div class="graphics">
      <img src="/image.png" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
}
.command-line {
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.history {
  flex-grow: 1;
  overflow-y: scroll;
  display: flex;
  flex-direction: column-reverse;
  justify-content: start;
}
input {
  height: 30px;
  font-size: 20px;
  border: outset 3px;
  background-color: #161414;
  color: white;
}
.graphics {
  width: 50%;
  height: 100%;
  border-left: ridge 10px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
