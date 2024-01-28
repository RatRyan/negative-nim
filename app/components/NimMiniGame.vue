<template>
    <div class="wrapper">
      <!-- Display current state of the heap -->
      <div class="command-line">
        <div class="history">
            <Message :command="currentHeapState.toString()" />
        </div>
        <div class="prompt">
          <BootstrapIcon name="caret-right-fill"></BootstrapIcon>
          <input
            @keyup.enter="takeObjects()"
            type="text"
            v-model="playerChoice"
            placeholder="Enter 1, 2, or 3"
            autofocus
          />
        </div>
      </div>
      <!-- Optional: Display graphics or additional information -->
      <div class="graphics">
        <img src="/town.png">
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue';
  import Message from '@/components/Message.vue'; 
  import BootstrapIcon from '@/components/NimMiniGame.vue'; 
  
  type Message = {
    command: string;
    result: string;
  };
  
  const messageHistory = reactive<Message[]>([]);
  const currentHeapState = ref(12); 
  const playerChoice = ref('');
  
  function takeObjects() {
    const playerCount = parseInt(playerChoice.value);
  
    if (playerCount >= 1 && playerCount <= 3) {
      currentHeapState.value -= playerCount;
  
      if (currentHeapState.value === 0) {
        messageHistory.push({ command: '', result: 'You win! Game over.' });
        return;
      }
  
      const npcCount = Math.min(3, currentHeapState.value);
      currentHeapState.value -= npcCount;
  
      messageHistory.push({
        command: `You took ${playerCount} objects.`,
        result: `NPC took ${npcCount} objects. Heap: ${currentHeapState.value}`,
      });
  
      if (currentHeapState.value === 0) {
        messageHistory.push({ command: '', result: 'You lose! Game over.' });
      }
    } else {
      messageHistory.push({ command: '', result: 'Invalid choice. Enter 1, 2, or 3.' });
    }
  
    playerChoice.value = '';
  }
  </script>
  
  