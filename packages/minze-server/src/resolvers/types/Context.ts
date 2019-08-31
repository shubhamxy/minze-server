import {Prisma} from '../../database/generated/prisma-client';

export interface Context {
  db: Prisma;
  request: any;
}
