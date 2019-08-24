import {Request, Response} from 'express';
import {admin} from '.';
import * as jwt from 'jsonwebtoken';
import CONFIG from '../../config';
import {prisma} from '../../schema/generated/prisma-client';
import config from '../../config';
export default [
  {
    method: 'get',
    path: '/testing',
    handler: [
      async ({body}: Request, res: Response) => {
        try {
          const {uid} = await admin.auth().getUserByPhoneNumber('+911234567890');
          const user = await prisma.user({uid});
          if (!user) {
            throw new Error('Invalid Credentials');
          }
          const token = jwt.sign({userId: user.id}, config.ENV_VARS.APP_SECRET as jwt.Secret);

          res.send({
            id: user.id,
            token
          });
        } catch (err) {
          res.status(500).send(CONFIG.DEBUG ? JSON.stringify(err) : 'Server Error');
        }
      }
    ]
  }
];
