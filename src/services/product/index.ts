import { Request, Response } from "express";
import { prisma } from "../prisma/generated/prisma-client";
import searchRoutes from "./search/routes";

export default [
  {
    method: "get",
    path: "/products/:id",
    handler: [
      async ({ query, params }: Request, res: Response) => {
        console.log(params);
        const result = await prisma.products({
          where: {
            id: params.id,
          },
        });
        res.status(200).send(result);
      },
    ],
  },
  ...searchRoutes,
];

