<script setup>
const areas = [
  {
    name: 'forest',
    dialogue: 'You awake in a forest and are met with a path and you walk down it humming a tune.',
    connections: [1],
  },
  {
    name: 'town',
    dialogue: `
      Finally, after hours of walking you come up upon a small town.
      Do you want to go to the tavern, or continue through the city?`,
    connections: [2, 3],
  },
  {
    name: 'tavern',
    dialogue: `You find that there is a group at a table glaring at you 
      and talking between themselves, as that goes on the bartender is always 
      extending a hearty hello towards you as you enter.`,
    connections: [4],
  },
  {
    name: 'conflict',
    dialogue: `The group sees you approaching and all get up and start heading 
      towards you. You look back at the door and debate running but its too late...`,
    connections: [],
  },
  {
    name: 'bar',
    dialogue: `As you go to sit down the bar keeper come to you and offers you a 
      drink you accept and need to dig in your pockets and get some gold to give 
      to the bar tender.`,
    connections: [],
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

const currentArea = ref(0)
const dialogue = ref('');
const error = ref('');
const userInput = ref('');
const command = reactive({
  action: '',
  target: '',
});

function performCommand() {
  const inputSequence = userInput.value.split(' ');
  command.action = inputSequence[0];
  userInput.value = '';
}
</script>

<template>
  <div>
    <h1>negative nim</h1>
    <span>{{ dialogue }}</span>
    <p>What would you like to do?</p>
    <input type="text" v-model="userInput" />
    <button @click="performCommand(userInput)">submit</button>
    <p>{{ error }}</p>
  </div>
</template>
