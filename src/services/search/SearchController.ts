import { prisma } from "../prisma/generated/prisma-client";
export const getProductsByName = async (q: string) => {
  if (q.length < 3) {
    return {
      features: [],
      type: "FeatureCollection",
    };
  }

  const result = await prisma.products({
    where: {
      name_contains: q,
    },
  });
  return result;
};
