import { prismaObjectType } from 'nexus-prisma';

export const Post = prismaObjectType({
  name: 'Product',
  definition(t) {
    t.prismaFields(['*']);
  }
});
