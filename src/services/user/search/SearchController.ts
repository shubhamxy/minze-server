import { prisma } from '../../../generated/prisma-client';

export const getUsersByName = async (q: string) => {
  const result = await prisma.users({
    where: {
      name_contains: q
    }
  });
  return result;
};
