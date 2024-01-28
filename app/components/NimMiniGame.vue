<template>
  <div id="app">
    <h1>Nim Game</h1>
    <div class="heap">
      <div v-for="count in gameState.objects" :key="count" class="stone">
        🧱
      </div>
    </div>
    <div v-if="!gameState.winner" class="controls">
      <label>Objects to Remove:</label>
      <select
        v-model="gameState.objectsToRemove"
        :disabled="gameState.currentPlayer === 2"
      >
        <option v-for="num in [1, 2, 3]" :key="num" :value="num">
          {{ num }}
        </option>
      </select>
      <button
        @click="playerRemoveObjects"
        :disabled="
          gameState.currentPlayer === 2 ||
          gameState.objectsToRemove > gameState.objects
        "
      >
        Remove Objects
      </button>
    </div>
    <div v-if="gameState.winner" class="winner">
      <p>{{ gameState.winner }}</p>
      <button @click="resetGame">Play Again</button>
    </div>
  </div>
</template>

<script setup>
const gameState = reactive({
  objects: Number,
  currentPlayer: Number,
  winner: Boolean,
  objectsToRemove: Number,
  playerCanInteract: Boolean,
});

function playerRemoveObjects() {
  if (
    gameState.currentPlayer === 1 &&
    !gameState.winner &&
    gameState.playerCanInteract
  ) {
    const objectsToRemove = parseInt(gameState.objectsToRemove, 10);
    if (
      objectsToRemove > 0 &&
      objectsToRemove <= 3 &&
      objectsToRemove <= gameState.objects
    ) {
      gameState.objects -= objectsToRemove;
      if (gameState.checkWin()) {
        gameState.winner = 'Player wins!';
      } else {
        gameState.currentPlayer = 2;
        gameState.makeNPCMove();
      }
    }
  }
}
function makeNPCMove() {
  if (!gameState.checkWin()) {
    const npcObjectsToRemove = 4 - gameState.objectsToRemove;
    gameState.objects -= npcObjectsToRemove;
    if (gameState.checkWin()) {
      gameState.winner = 'NPC wins!';
    } else {
      gameState.currentPlayer = 1; // Switch back to the player
    }
  }
}
function checkWin() {
  return gameState.objects === 0;
}
function resetGame() {
  gameState.objects = 12;
  gameState.currentPlayer = 1;
  gameState.winner = null;
  gameState.objectsToRemove = 1;
  gameState.playerCanInteract = true;
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}

.heap {
  display: flex;
  margin-bottom: 10px;
}

.stone {
  font-size: 24px;
  margin: 0 5px;
}

.controls {
  margin-top: 20px;
}

.winner {
  margin-top: 20px;
  font-size: 18px;
}
</style>
