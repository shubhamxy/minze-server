import * as admin from 'firebase-admin';
import serviceAccount from '../../keys/service-account.json';
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: serviceAccount.project_id,
    clientEmail: serviceAccount.client_email,
    privateKey: serviceAccount.private_key.replace(/\\n/g, '\n')
  }),
  databaseURL: `${serviceAccount.project_id}.firebaseio.com`
});

export { admin };
