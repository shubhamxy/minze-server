import * as admin from 'firebase-admin';
/**
 * serviceAccount Key Location
 */

// const KeyLocation = '../../../keys/serviceAccount.json';

admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID || '',
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL || '',
    privateKey: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n') : ''
  }),
  databaseURL: `${process.env.FIREBASE_PROJECT_ID || ''}.firebaseio.com`
});

export { admin };
