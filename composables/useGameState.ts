export function useGameState() {
  type GameState = 'CharacterCreator' | 'MainGame' | 'GameOver';
  const gameState = useState<GameState>('gameState', () => 'CharacterCreator');

  function goToCharacterCreator() {
    gameState.value = 'CharacterCreator';
  }

  function gotoMainGame() {
    gameState.value = 'MainGame';
  }

  function gotoGameOver() {
    gameState.value = 'GameOver';
  }

  return {
    gameState,
    goToCharacterCreator,
    gotoMainGame,
    gotoGameOver,
  };
}
