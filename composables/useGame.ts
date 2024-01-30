export function useGame() {
  const areas = [
    {
      name: 'forest',
      dialogue: `You wake up to find yourself lying on the damp forest floor. The canopy overhead filters the sunlight, casting dappled shadows on the ground. The air is thick with the scent of pine and earth. You have no memory of how you got here or where you are. As you stand up, you notice a narrow path winding its way through the trees. The forest seems both mysterious and inviting. You realize that your only choice is to venture forth and discover what lies ahead.`,
      actions: ['town'],
			image: '/images/forest.png'
    },
    {
      name: 'town',
      dialogue:
        'finally, after hours of walking you come up upon a small town. Do you want to go to the tavern, or continue through the city?',
      actions: ['tavern', 'city'],
			image: '/images/town.png'
    },
    {
      name: 'tavern',
      dialogue:
        'You find that there is a group at a table glaring at you and talking between themselves, as that goes on the bartender is always extending a hearty hello towards you as you enter.',
      actions: ['conflict', 'bar'],
			image: '/images/tavern.png'
    },
    {
      name: 'conflict',
      dialogue:
        'The group sees you approaching and all get up and start heading towards you. You look back at the door and debate running but its too late...',
      actions: ['lose'],
			// Image: '/images/.png'
    },
    {
      name: 'bar',
      dialogue:
        'As you go to sit down the bar keeper come to you and offers you a drink if you can win in a game of Nim.',
      actions: ['nim', 'leave'],
			image: '/images/tavern.png'
    },
    {
      // When Nim is current location display game
      name: 'nim',
      dialogue:
        'You sit down and the bar keeper explains the rules of the game. You are given 10 matches and the goal is to not be the one to take the last match. You can take 1, 2, or 3 matches at a time.',
      actions: ['win', 'lose'],
    },
    {
      name: 'leave',
      dialogue:
        'You leave the bar and continue on your journey through the town.',
      actions: ['city'],
			image: '/images/town.png'
    },
    {
      name: 'city',
      dialogue:
        'Walking through the town the air is filled with the smell of fresh bread being backed and blue skies, but just as you get towards the outskirts of the town you hear a feint cry for help...',
      actions: ['ignore', 'investigate'],
			image: '/images/town.png'
    },
    {
      name: 'ignore',
      dialogue:
        'You decide to continue on the path of no resistance and remain blissfully ignorant of the screams and will never findout for you will just keep walking for eternity.That is what you did from birth and will continue to do until death.',
      actions: ['win'],
			image: '/images/town.png'
    },
    {
      name: 'investigate',
      dialogue:
        'Wanting to help to help whoever might be in danger you decide to go and investigate the soundsand see a cottage on fire!',
      actions: ['fire'],
			image: '/images/house-fire.png'
    },
    {
      // displays fire game
      name: 'fire',
      dialogue: '',
      actions: ['win, lose'],
    },
  ];

  type GameComponent = 'CharacterCreator' | 'MainGame' | 'GameOver';
  type GameState = {
    component: GameComponent;
    currentArea: {
      name: string;
      dialogue: string;
      actions: string[];
    };
  };
  const gameState = useState<GameState>('gameState', () => ({
    component: 'CharacterCreator',
    currentArea: {
      name: '',
      dialogue: '',
      actions: [''],
    },
  }));

  function startGame() {
    gameState.value.component = 'CharacterCreator';
  }

  function enterMainGame() {
    gameState.value.component = 'MainGame';
    gameState.value.currentArea.name = areas[0].name;
    gameState.value.currentArea.dialogue = areas[0].dialogue;
    gameState.value.currentArea.actions = areas[0].actions;
    console.log(enterArea('forest'));
  }

  function enterArea(areaName: string) {
    const area = areas.find((a) => a.name === areaName);
    if (area) {
      gameState.value.currentArea.name = area.name;
      gameState.value.currentArea.dialogue = area.dialogue;
      gameState.value.currentArea.actions = area.actions;
    }
  }

  function endGame() {
    gameState.value.component = 'GameOver';
  }

  return {
    enterArea,
    gameState,
    startGame,
    enterMainGame,
    endGame,
  };
}
