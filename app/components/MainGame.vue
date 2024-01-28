<script setup lang="ts">
type Message = {
  command: string;
  result: string;
};
const messageHistory = reactive<Message[]>([{command: "", result: "This shit aint nothing to me man"}]);
const command = ref();

function executeCommand() {
  messageHistory.push({
    command: command.value,
    result: 'yeah! that sounds right!',
  });
  command.value = '';
}
</script>

<template>
  <div class="wrapper">
    <div class="command-line">
      <div class="history">
        <Message
          v-for="i in messageHistory.slice().reverse()"
          :command="i.command"
          :result="i.result"
        />
      </div>
      <div class="prompt">
        <BootstrapIcon name="caret-right-fill"></BootstrapIcon>
        <input
          @keyup.enter="executeCommand()"
          type="text"
          v-model="command"
          placeholder="enter command here..."
          autofocus
        />
      </div>
    </div>
    <div class="graphics">
      <div></div>
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
  justify-content: flex-start;
}
.prompt {
  display: flex;
  min-height: 40px;
  align-items: center;
  justify-content: center;
  border: outset 5px;
  i {
    margin: 5px 5px;
  }
  input {
    all: unset;
    flex-grow: 1;
  }
}
.graphics {
  width: 50%;
  height: 100%;
}
</style>
