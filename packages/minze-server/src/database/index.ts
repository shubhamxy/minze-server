import CONFIG from '../config';
import { Prisma } from './generated/prisma-client';

export const db = new Prisma({
  endpoint: CONFIG.ENV_VARS.PRISMA_ENDPOINT,
  secret: CONFIG.ENV_VARS.PRISMA_SECRET,
  debug: CONFIG.DEBUG
});
