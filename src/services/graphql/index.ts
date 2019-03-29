import { makePrismaSchema, prismaObjectType } from 'nexus-prisma';
import * as path from 'path';
import * as allTypes from './resolvers';
import { prisma } from '../../generated/prisma-client';
import datamodelInfo from '../../generated/nexus-prisma';
import { permissions } from './permissions';

/**
 * https://nexus.js.org/docs/database-access-with-prisma
 */

export const schema = makePrismaSchema({
  // Provide all the GraphQL types we've implemented
  types: allTypes,

  // Configure the interface to Prisma
  prisma: {
    datamodelInfo,
    client: prisma
  },

  // Specify where Nexus should put the generated files
  outputs: {
    schema: path.join(__dirname, '../../generated/schema.graphql'),
    typegen: path.join(__dirname, '../../generated/nexus.ts')
  },

  // Configure nullability of input arguments: All arguments are non-nullable by default
  nonNullDefaults: {
    input: false,
    output: false
  },

  // Configure automatic type resolution for the TS representations of the associated types
  typegenAutoConfig: {
    sources: [
      {
        // TODO: Find a solution for this
        source: path.join(__dirname, '../../../src/services/graphql/types.ts'),
        alias: 'types'
      }
    ],
    contextType: 'types.Context'
  }
});

export { permissions };
