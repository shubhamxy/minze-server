import { makePrismaSchema, prismaObjectType } from "nexus-prisma";
import * as path from "path";
import { prisma } from "../../database/generated/prisma-client";
import datamodelInfo from "../../database/generated/prisma-nexus";
/**
 * https://nexus.js.org/docs/database-access-with-prisma
 */
const Query = prismaObjectType({
  name: "Query",
  definition: (t) => t.prismaFields(["*"])
});

const Mutation = prismaObjectType({
  name: "Mutation",
  definition(t) {
    t.prismaFields(["*"]);
  }
});

export const schema = makePrismaSchema({
  types: [Query, Mutation],
  prisma: {
    datamodelInfo,
    client: prisma
  },

  outputs: {
    schema: path.join(__dirname, "../../database/generated/schema.graphql"),
    typegen: path.join(__dirname, "../../database/generated/nexus.ts")
  }
});
