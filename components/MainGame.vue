<script setup lang="ts">
const area = useArea();
const { gotoGameOver } = useGameState();
type Message = {
	command: string;
	result: string;
};
const messageHistory = reactive<Message[]>([]);
const command = ref();

function executeCommand() {
	switch (command.value) {
		// clear command to clear the message history
		case "clear":
			messageHistory.splice(0, messageHistory.length + 1);
			displayCurrentArea();
			break;
		default:
			let commandWorked = false;
			// check if the command is a valid action
			area.currentArea.value.actions.forEach((action) => {
				if (command.value === action) {
					commandWorked = true;
					// temp fire game answer until completed
					area.enterArea(action);
					// if the player wins or loses, go to the game over screen
					if (
						area.currentArea.value.name.includes("lose") ||
						area.currentArea.value.name.includes("win")
					) {
						gotoGameOver();
						return;
					}
					messageHistory.push({
						command: command.value,
						result: "You go to " + area.currentArea.value.name + ".",
					});
					displayCurrentArea();
				}
			});
			if (!commandWorked) {
				messageHistory.push({
					command: command.value,
					result: "I don't understand that command.",
				});
			}
			break;
	}
	command.value = "";
}

function displayCurrentArea() {
	messageHistory.push({
		command: "",
		result: area.currentArea.value.dialogue,
	});
}

onMounted(() => {
	displayCurrentArea();
});
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
			<NimMainGame v-if="area.currentArea.value.image === 'nimGame'"></NimMainGame>
			<!-- Temp disabled -->
			<!-- <FireGame v-else-if="area.currentArea.value.image === 'fireGame'"></FireGame> -->
			<img
				:src="area.currentArea.value.image"
				v-else="area.currentArea.value.image"
			/>
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
