const add = (a: number, b: number) => a + b;

describe('sanity add 2 numbers', () => {
  it('should add two numbers', () => {
    expect(add(3100, 36)).toEqual(3136);
  });
});
