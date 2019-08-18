import dotenv from 'dotenv';
import {resolve} from 'path';
import {runtimeEnvTest} from '../utils/runtimetests';

const CONFIG = ((env = process.env.NODE_ENV) => {
  switch (env) {
    case 'production':
      return {
        DEBUG: false,
        LOGGING: ['File', 'Console'],
        APP_ENV: 'production'
      };
    default:
      return {
        DEBUG: false,
        LOGGING: ['Console'],
        APP_ENV: 'development'
      };
  }
})();

dotenv.config({
  path: resolve(
    __dirname,
    process.env.NODE_ENV === 'production' ? '../../.env' : '../../.env.development'
  )
});
// required variables
const ENV_VARS = {
  NODE_ENV: '',
  APP_SECRET: '',
  PORT: '',
  PRISMA_ENDPOINT: '',
  PRISMA_SECRET: '',
  PRISMA_MANAGEMENT_API_SECRET: ''
};

Object.keys(ENV_VARS).forEach((key: string) => {
  ENV_VARS[key] = process.env[key] || '';
});

runtimeEnvTest(ENV_VARS);

export default {...CONFIG, ENV_VARS};
