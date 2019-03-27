import { Request, Response } from "express";
import { checkSearchParams } from "../../../middleware/checks";
import { getProductsByName } from "./SearchController";

export default [
  {
    method: "get",
    path: "/products",
    handler: [
      checkSearchParams, // <-- this line
      async ({ query }: Request, res: Response) => {
        const result = await getProductsByName(query.q);
        res.status(200).send(result);
      },
    ],
  },
];
