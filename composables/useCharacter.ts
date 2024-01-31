export function useCharacter() {
  type CharacterInfo = {
    name: string;
    characterClass: string;
  };
  const characterInfo = useState<CharacterInfo>('characterInfo', () => ({
    name: '',
    characterClass: '',
  }));

  function createCharacter(name: string, characterClass: string) {
    characterInfo.value.name == name;
    characterInfo.value.characterClass == characterClass;
  }

  return {
    characterInfo,
    createCharacter,
  };
}
