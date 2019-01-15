import { Request, Response } from "express";
import { prisma } from "../prisma/generated/prisma-client";

export default [
  {
    method: "get",
    path: "/products",
    handler: [
      async ({ query }: Request, res: Response) => {
        const result = await prisma.products({});
        // const result = "Hello, World!";
        res.status(200).send(result);
      },
    ],
  },
];

