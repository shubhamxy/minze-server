import { Request, Response } from 'express';
import * as admin from 'firebase-admin';

import { prisma } from '../../generated/prisma-client';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import serviceAccount from '../../keys/minze-cf40b-firebase-adminsdk-n24o7-e83b3e76ec.json';

admin.initializeApp({
  // credential: admin.credential.cert({
  //   projectId: process.env.FIREBASE_PROJECT_ID,
  //   clientEmail: process.env.FIREBASE_CLIENT_EMAIT,
  //   privateKey: process.env.FIREBASE_PRIVATE_KEY
  // }),
  // @ts-ignore
  credential: admin.credential.cert({
    projectId: serviceAccount.project_id,
    clientEmail: serviceAccount.client_email,
    privateKey: serviceAccount.private_key
  }),
  databaseURL: 'https://minze-cf40b.firebaseio.com'
});

export { admin };
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
