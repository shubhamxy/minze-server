import { config } from 'dotenv';
import { ErrorReporter } from './ErrorReporter';
import { resolve } from 'path';

// Application is build in 3 stages
// 1. development -> dev + local
// 2. testing -> prod + local
// 3. staging | production -> prod
const NODE_ENV = process.env.NODE_ENV === 'production' ? 'prod' : 'dev';
config({ path: resolve(__dirname, `../../.env.${NODE_ENV}`) });

const requiredEnvVars = [
  'APP_SECRET', 
  'FIREBASE_PROJECT_ID',
  'FIREBASE_CLIENT_EMAIL',
  'FIREBASE_PRIVATE_KEY'
];
const apiKeys: string[] = [];

requiredEnvVars.forEach(item => apiKeys.push(process.env[item] || ''));
const errorReporter = new ErrorReporter(apiKeys);
errorReporter.report();
