import dotenv from 'dotenv';

import { resolve } from 'path';
import { runtimeEnvTest } from "../utils/runtimetests";

// Application is build in 3 stages
// 1. local -> local + localdb
// 2. dev -> dev + dev-db =>
// 3. production -> prod

enum APP_STAGE {
  local = 'local',
  development = 'development',
  production = 'production',
  test = 'test'
}
enum LOGGER {
  FILE = 'File',
  CONSOLE = 'Console'
}
interface IConfig {
  DEBUG: boolean;
  LOGGING: string[];
  APP_ENV: APP_STAGE;
}

const getConfig = (env: string | undefined): IConfig => {
  // common config
  let CONFIG = {
    DEBUG: false,
    LOGGING: [LOGGER.FILE, LOGGER.CONSOLE]
  };

  switch (env) {
    case APP_STAGE.production:
      // prod CONFIG
      const prodConfig = {
        ...CONFIG,
        APP_ENV: APP_STAGE.production
      };
      return prodConfig;
    case APP_STAGE.development:
      // dev CONFIG
      const devConfig = {
        ...CONFIG,
        DEBUG: true,
        LOGGING: [LOGGER.CONSOLE],
        APP_ENV: APP_STAGE.development
      };
      return devConfig;
    case APP_STAGE.local:
      // local CONFIG
      const localConfig = {
        ...CONFIG,
        LOGGING: [LOGGER.CONSOLE],
        APP_ENV: APP_STAGE.local
      };
      return localConfig;
    case APP_STAGE.test:
      // test CONFIG
      const testConfig = {
        ...CONFIG,
        LOGGING: [LOGGER.CONSOLE],
        APP_ENV: APP_STAGE.test
      };
      return testConfig;
    default:
      throw Error('INVALID ENV VARIABLES, CHECK THE CONFIG; ENV=' + env);
  }
};

const CONFIG = getConfig(process.env.NODE_ENV);
// loads environment variables from a .env file into process.env
dotenv.config({ path: resolve(__dirname, `../../.env.${CONFIG.APP_ENV}`) });

// these env vars will be exported to be used in the app directly
const requiredEnvVars = ['NODE_ENV', 'APP_SECRET', 'PORT'];
// ENV_VARS contains all the vars needed in the app
const ENV_VARS: { [key: string]: string } = {};
requiredEnvVars.forEach((item: string) => (ENV_VARS[item] = process.env[item] || ''));

runtimeEnvTest(ENV_VARS);

export default { ...CONFIG, ENV_VARS };
