<script setup lang="ts">
const { enterMainGame } = useGame();
const { characterInfo } = useCharacter();

function handleEnterMainGame() {
  if (
    characterInfo.value.characterClass == '' ||
    characterInfo.value.name == ''
  ) {
    return;
  }
  enterMainGame();
}
</script>

<template>
  <div class="content">
    <div class="character-select">
      <div class="character-panel">
        <div class="div">
          <h3><b>Class: Rogue</b></h3>
          <p>you like to hit things but sneakily</p>
        </div>
        <div class="select">
          <p>Select:</p>
          <input
            type="radio"
            id="warrior"
            name="characterClass"
            value="warrior"
            v-model="characterInfo.characterClass"
          />
        </div>
      </div>
      <div class="character-panel">
        <div class="div">
          <h3><b>Class: Warrior</b></h3>
          <p>you like to hit things</p>
        </div>
        <div class="select">
          <p>Select:</p>
          <input
            type="radio"
            id="warrior"
            name="characterClass"
            value="warrior"
            v-model="characterInfo.characterClass"
          />
        </div>
      </div>
      <div class="character-panel">
        <div class="div">
          <h3><b>Class: Mage</b></h3>
          <p>you like to cast spells</p>
        </div>
        <div class="select">
          <p>Select:</p>
          <input
            type="radio"
            id="warrior"
            name="characterClass"
            value="warrior"
            v-model="characterInfo.characterClass"
          />
        </div>
      </div>
    </div>
    <div class="start">
      <div class="name">
        <label>Enter Your Name:</label>
        <input type="text" v-model="characterInfo.name" />
      </div>
      <button @click="handleEnterMainGame()">Start Game</button>
    </div>
  </div>
</template>

<style scoped>
* {
  color: #00ff01;
}
.content {
  display: flex;
  flex-direction: column;
}
.character-select {
  flex: 1 0 auto;
  display: flex;
  padding: 4px 4px;
}
.character-panel {
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: ridge 3px;
  margin: 2px 2px 2px 2px;
}
.select {
  justify-content: center;
  display: flex;
}

.start {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  button {
    all: unset;
    padding: 5px;
    border: ridge 4px;
    color: #00ff01;
    background-color: transparent;
    cursor: pointer;
  }
  button:hover {
    color: #00b600;
  }
  input {
    all: unset;
    border: ridge 4px;
  }
}
.name {
  text-align: center;
  display: flex;
  flex-direction: column;
}
</style>
