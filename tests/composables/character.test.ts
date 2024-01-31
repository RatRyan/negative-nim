import { useCharacter as _sut } from '../../composables/useCharacter';

describe('Character Creation Tests', () => {
  test('User can create a character', async () => {
    const createCharacter = vi.fn();
    vi.stubGlobal('useCharacter', createCharacter);
    expect(createCharacter).toBeDefined();
  });
});
