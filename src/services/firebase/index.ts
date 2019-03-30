import { Request, Response } from 'express';
import * as admin from 'firebase-admin';

import { prisma } from '../../generated/prisma-client';
/**
 * serviceAccount Key Location
 */

const KeyLocation = '../../../keys/serviceAccount.json';

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID || require(KeyLocation).project_id,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL || require(KeyLocation).client_email,
    privateKey: process.env.FIREBASE_PRIVATE_KEY || require(KeyLocation).private_key
  }),
  databaseURL: `${process.env.FIREBASE_PROJECT_ID || 'minze-cf40b'}.firebaseio.com`
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
