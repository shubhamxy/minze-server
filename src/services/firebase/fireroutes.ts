import { Request, Response } from 'express';
import { admin } from '.';
import * as jwt from 'jsonwebtoken';

import { prisma } from '../../generated/prisma-client';
import config from '../../config';
export default [
  {
    method: 'get',
    path: '/testing',
    handler: [
      async ({ body }: Request, res: Response) => {
        try {
          const { uid } = await admin.auth().getUserByEmail('test@test.com');
          const user = await prisma.user({ uid });
          if (!user) {
            throw new Error('Invalid Credentials');
          }
          const token = jwt.sign({ userId: user.id }, config.ENV_VARS.APP_SECRET as jwt.Secret);
          res.send({
            id: user.id,
            token
          })
        } catch (err) {
          res.status(500).send('Server Error');
        }
      }
    ]
  }
];
