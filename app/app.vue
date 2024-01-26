<script setup lang="ts">
const areas = [
  {
    name: 'town',
    dialogue: `
      finally, after hours of walking you come up upon a small town.
      Do you want to go to the tavern, or continue through the city?`,
    connections: ['tavern', 'city'],
  },
  {
    name: 'tavern',
    dialogue: `You find that there is a group at a table glaring at you
      and talking between themselves, as that goes on the bartender is always
      extending a hearty hello towards you as you enter.`,
    connections: ['conflict', 'bar'],
  },
  {
    name: 'conflict',
    dialogue: `The group sees you approaching and all get up and start heading
      towards you. You look back at the door and debate running but its too late...`,
    connections: ['end'],
  },
  {
    name: 'bar',
    dialogue: `As you go to sit down the bar keeper come to you and offers you a
      drink you accept and need to dig in your pockets and get some gold to give
      to the bar tender.`,
    connections: [''],
  },
  {
    name: 'city',
    dialogue: `Walking through the town the air is filled with the
      smell of fresh bread being backed and blue skies, but just as
      you get towards the outskirts of the town you hear a feint cry for help...`,
    connections: [],
  },
  {
    name: 'ignore',
    dialogue: `You decide to continue on the path of no resistance and remain
      blissfully ignorant of the screams and will never findout for you will just
      keep walking for eternity.That is what you did from birth and will continue
      to do until death.`,
    connections: [],
  },
  {
    name: 'investigate',
    dialogue: `Wanting to help to help whoever might be in danger you decide to
      go and investigate the soundsand see a cottage on fire!`,
    connections: [],
  },
  {
    name: 'fire',
    dialogue: `As you go to sit down the bar keeper come to you and offers you a
      drink you accept and need to dig in your pockets and get some gold to give
      to the bar tender.`,
    connections: [],
  },
];

let currentArea = reactive({
  name: 'forest',
  dialogue: 'you awake in a yada yada',
  connections: ['town'],
});
const userInput = ref('');
const error = ref('');

function performCommand() {
  error.value = '';
  const inputSequence = userInput.value.split(' ');
  switch (inputSequence[0].toLowerCase()) {
    case 'move':
      loadArea(inputSequence[1]);
      break;
    default:
      error.value = 'unknown command';
  }
  userInput.value = '';
}

function loadArea(newArea: string) {
  if (newArea == undefined) {
    error.value = "no place specified!";
    return;
  }
  if (!currentArea.connections.includes(newArea.toLowerCase())) {
    error.value = "that place doesn't exist!";
    return;
  }
  areas.forEach((area, index) => {
    if (area.name == newArea.toLowerCase()) {
      currentArea = areas[index];
      return;
    }
  });
}
</script>

<template>
  <div>
    <h1>negative nim</h1>
    <span>{{ currentArea.dialogue }}</span>
    <p>What would you like to do?</p>
    <input type="text" v-model="userInput" />
    <button @click="performCommand()">submit</button>
    <p>{{ error }}</p>
  </div>
</template>
