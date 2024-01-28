<script setup lang="ts">
const command = ref();
const commandHistory = ref<string[]>([]);

function executeCommand() {
  commandHistory.value.push(command.value);
  command.value = '';
}
</script>

<template>
  <NuxtLayout>
    <div class="game">
      <div class="command-line">
        <div class="history">
          <p v-for="command in commandHistory.slice().reverse()">
            > {{ command }}
          </p>
        </div>
        <input @keyup.enter="executeCommand()" type="text" v-model="command" placeholder="enter command here..."/>
      </div>
      <div class="graphics">
        <img src="/borpa-spin.gif">
      </div>
    </div>
  </NuxtLayout>
</template>

<style>
p {
  margin: 5px;
}
.game {
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
}
input {
  height: 30px;
  font-size: 20px;
}
.graphics {
  width: 50%;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
