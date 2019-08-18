import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import config from "../../config";
export default [
  {
    method: "get",
    path: "/users",
    handler: [

      async ({ query, params }: Request, res: Response) => {
        const result = jwt.sign({
          "grants": [
            {
              "target": "*/*",
              "action": "*"
            }
          ],
          "iat": (new Date).getTime(),
          "exp": 1690744915
        }, config.ENV_VARS.PRISMA_MANAGEMENT_API_SECRET)
        
        // const result = await prisma.users({
        //   where: {
        //     id: params.id
        //   }
        // });
        res.status(200).send(result);
      }
    ]
  }
];
