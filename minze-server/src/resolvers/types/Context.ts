import {Prisma} from '../../schema/generated/prisma-client';

export interface Context {
  db: Prisma;
  request: any;
}
