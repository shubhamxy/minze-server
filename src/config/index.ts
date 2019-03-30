import { ErrorReporter } from './ErrorReporter';
import { config } from 'dotenv';
// config({ path: resolve(__dirname, '../../.env.example') });
config();
const requiredEnvVars: string[] = [];
/** These Keys are required to be provided via env variables */
['APP_SECRET', 'FIREBASE_PROJECT_ID', 'FIREBASE_CLIENT_EMAIL', 'FIREBASE_PRIVATE_KEY'].forEach(item =>
  requiredEnvVars.push(process.env[item] || '')
);

const errorReporter = new ErrorReporter(requiredEnvVars);
console.log(process.env);
export { errorReporter };
