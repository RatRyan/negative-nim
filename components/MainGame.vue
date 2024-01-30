<script setup lang="ts">
const area = useArea();
type Message = {
	command: string;
	result: string;
};
const messageHistory = reactive<Message[]>([]);
const command = ref();

function executeCommand() {
	// let tempArea = area.currentArea.value;
	area.enterArea(command.value);
	messageHistory.push({
		command: command.value,
		result: "You enter " + area.currentArea.value.name + ".",
	});
	command.value = "";
	displayCurrentArea();
}

onMounted(() => {
	displayCurrentArea();
});

function displayCurrentArea() {
  messageHistory.push({
    command: "",
    result: area.currentArea.value.dialogue,
  });

  messageHistory.push({
    command: "",
    result: 'Where would you like to go next? ' + area.currentArea.value.actions
  });
}
</script>

<template>
	<div class="content">
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
			<img :src="area.currentArea.value.image" />
		</div>
	</div>
</template>

<style scoped>
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
}

.prompt i {
	margin: 5px 5px;
}

.prompt input {
	all: unset;
	flex-grow: 1;
}

.graphics {
	width: 50%;
	height: 100%;
	border-left: ridge 5px;
}

.graphics img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
</style>
