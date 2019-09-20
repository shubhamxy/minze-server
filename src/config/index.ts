import dotenv from 'dotenv';
import { resolve } from 'path';
import { runtimeEnvTest } from '../utils/runtimetests';

type APP_STAGE = 'development' | 'production';
type LOGGER = 'File' | 'Console';

const getConfig = (env: string | undefined) => {
  const CONFIG = {
    DEBUG: false,
    LOGGING: 'Console'
  };
  if (env == 'production') {
    // prod CONFIG
    return {
      ...CONFIG,
      APP_ENV: 'production'
    };
  } else {
    return {
      ...CONFIG,
      DEBUG: true,
      APP_ENV: 'development'
    };
  }
};

const CONFIG = getConfig(process.env.NODE_ENV);
dotenv.config({
  path: resolve(__dirname, process.env.NODE_ENV === 'production' ? '../../.env.production' : '../../.env')
});

const requiredEnvVars = [
  'NODE_ENV',
  'APP_SECRET',
  'PORT',
  'PRISMA_ENDPOINT',
  'PRISMA_SECRET',
  'PRISMA_MANAGEMENT_API_SECRET'
];
// ENV_VARS contains all the vars needed in the app
const ENV_VARS: { [key: string]: string } = {};
requiredEnvVars.forEach((item: string) => (ENV_VARS[item] = process.env[item] || ''));

runtimeEnvTest(ENV_VARS);

export default { ...CONFIG, ENV_VARS };
