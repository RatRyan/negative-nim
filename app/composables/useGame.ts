export function useGame() {
  const areas = [
    {
      name: 'town',
      dialogue:
        'finally, after hours of walking you come up upon a small town. Do you want to go to the tavern, or continue through the city?',
      actions: ['tavern', 'city'],
    },
    {
      name: 'tavern',
      dialogue:
        'You find that there is a group at a table glaring at you and talking between themselves, as that goes on the bartender is always extending a hearty hello towards you as you enter.',
      actions: ['conflict', 'bar'],
    },
    {
      name: 'conflict',
      dialogue:
        'The group sees you approaching and all get up and start heading towards you. You look back at the door and debate running but its too late...',
      actions: ['end'],
    },
    {
      name: 'bar',
      dialogue:
        'As you go to sit down the bar keeper come to you and offers you a drink you accepte and need to dig in your pockets and get some gold to give to the bar tender.',
      actions: [''],
    },
    {
      name: 'city',
      dialogue:
        'Walking through the town the air is filled with the smell of fresh bread being backed and blue skies, but just as you get towards the outskirts of the town you hear a feint cry for help...',
      actions: [],
    },
    {
      name: 'ignore',
      dialogue:
        'You decide to continue on the path of no resistance and remain blissfully ignorant of the screams and will never findout for you will just keep walking for eternity.That is what you did from birth and will continue to do until death.',
      actions: [],
    },
    {
      name: 'investigate',
      dialogue:
        'Wanting to help to help whoever might be in danger you decide to go and investigate the soundsand see a cottage on fire!',
      actions: [],
    },
    {
      name: 'fire',
      dialogue:
        'As you go to sit down the bar keeper come to you and offers you a drink you accept and need to dig in your pockets and get some gold to give to the bar tender.',
      actions: [],
    },
  ];
  
  const currentArea = reactive({
    name: '',
    dialogue: '',
    actions: [''],
  });

  return {
    currentArea,
  };
}