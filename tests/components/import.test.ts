describe('import vue components', () => {
  test('components can be imported', async () => {
    const cmp = await import('../../components/MainGame.vue');
    expect(cmp).toBeDefined();
  });
});
