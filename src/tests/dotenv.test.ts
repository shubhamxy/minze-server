import CONFIG from '../config';
const { ENV_VARS } = CONFIG;
describe('Enviroment Variables are available', () => {
  test('Env Variables', () => {
    Object.keys(ENV_VARS).forEach(key => {
      if (ENV_VARS[key] === undefined || ENV_VARS[key] === '') {
        throw new Error(`${key} : is required`);
      }
      expect(ENV_VARS[key]).toBeDefined();
      expect(typeof ENV_VARS[key]).toBe('string');
    });
  });
});
