import { prisma } from '../../../graphql/generated/prisma-client';
export const getProductsByName = async (q: string) => {
  // if (q.length < 3) {
  //   return [];
  // }

  const result = await prisma.users({
    where: {
      name_contains: q
    }
  });
  return result;
};
