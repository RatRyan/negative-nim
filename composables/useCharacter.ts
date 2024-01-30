export function useCharacter() {
  type CharacterInfo = {
    name: string;
    characterClass: string;
  };
  const characterInfo = useState<CharacterInfo>('characterInfo', () => ({
    name: '',
    characterClass: '',
  }));
  return {
    characterInfo,
  };
}
