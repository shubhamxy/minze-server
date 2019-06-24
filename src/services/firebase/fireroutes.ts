import { Request, Response } from 'express';
import { prisma } from '../../graphql/generated/prisma-client';
import { admin } from '.';
export default [
  {
    method: 'post',
    path: '/verify',
    handler: [
      async ({ body }: Request, res: Response) => {
        try {
          await admin
            .auth()
            .verifyIdToken(body.idToken)
            .then(function(decodedToken) {
              prisma.createUser({ uid: decodedToken.uid });
              res.status(200).send({ ...decodedToken, type: 'success' });
            });
          // // prisma.createUser({ });
          // res.status(200).send({ type: 'success' });
        } catch (err) {
          res.status(500).send('Server Error');
        }
      }
    ]
  }
];
