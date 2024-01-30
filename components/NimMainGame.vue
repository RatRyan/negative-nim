<template>
  <div id="app">
    <h1>Nim Game</h1>
    <div class="heap">
      <div v-for="count in objects" :key="count" class="stone">
        🪙
      </div>
    </div>
    <div v-if="!winner" class="controls">
      <label>Objects to Remove:</label>
      <select v-model="objectsToRemove" :disabled="currentPlayer === 2">
        <option v-for="num in [1, 2, 3]" :key="num" :value="num">{{ num }}</option>
      </select>
      <button @click="playerRemoveObjects" :disabled="currentPlayer === 2 || objectsToRemove > objects">
        Remove Objects
      </button>
    </div>
    <div v-if="winner" class="winner">
      <p>{{ winner }}</p>
      <button @click="resetGame">Play Again</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      objects: 12,
      currentPlayer: 1,
      winner: null,
      objectsToRemove: 1,
      playerCanInteract: true,
    };
  },
  methods: {
    playerRemoveObjects() {
      if (this.currentPlayer === 1 && !this.winner && this.playerCanInteract) {
        const objectsToRemove = parseInt(this.objectsToRemove, 10);
        if (objectsToRemove > 0 && objectsToRemove <= 3 && objectsToRemove <= this.objects) {
          this.objects -= objectsToRemove;
          if (this.checkWin()) {
            this.winner = "Player wins!";
          } else {
            this.currentPlayer = 2;
            this.playerCanInteract = false; // Disable player interaction
            setTimeout(() => {
              this.makeNPCMove();
            }, 1000); // 1000 milliseconds (1 second) delay
          }
        }
      }
    },
    makeNPCMove() {
      if (!this.checkWin()) {
        const npcObjectsToRemove = 4 - this.objectsToRemove;
        this.objects -= npcObjectsToRemove;
        if (this.checkWin()) {
          this.winner = "NPC wins!";
        } else {
          this.currentPlayer = 1; // Switch back to the player
          this.playerCanInteract = true; // Enable player interaction
        }
      }
    },
    checkWin() {
      return this.objects === 0;
    },
    resetGame() {
      this.objects = 12;
      this.currentPlayer = 1;
      this.winner = null;
      this.objectsToRemove = 1;
      this.playerCanInteract = true;
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}

.heap {
  display: flex;
  justify-content: center;
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
