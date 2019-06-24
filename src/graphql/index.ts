import { makePrismaSchema, prismaObjectType } from 'nexus-prisma';
import path from 'path';
import { resolvers } from './resolvers';
import { prisma } from './generated/prisma-client';
import datamodelInfo from './generated/nexus-prisma';
import { permissions } from './permissions';

/**
 * https://nexus.js.org/docs/database-access-with-prisma
 */

export const schema = makePrismaSchema({
  // Provide all the GraphQL types we've implemented
  types: resolvers,

  // Configure the interface to Prisma
  prisma: {
    datamodelInfo,
    client: prisma
  },

  // Specify where Nexus should put the generated files
  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts')
  }
});

export { permissions };
