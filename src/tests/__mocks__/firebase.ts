import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: 'AIzaSyAJlSZvaaXwiqgPWb7b9gYe9hcQM_aZuoY',
  authDomain: 'minze-cf40b.firebaseapp.com',
  databaseURL: 'https://minze-cf40b.firebaseio.com',
  projectId: 'minze-cf40b',
  storageBucket: 'minze-cf40b.appspot.com',
  messagingSenderId: '545691223180',
  appId: '1:545691223180:web:3ceabfe455f8c667'
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export interface UserCredential {
  additionalUserInfo?: firebase.auth.AdditionalUserInfo | null;
  credential: firebase.auth.AuthCredential | null;
  operationType?: string | null;
  user: firebase.User | null;
}
export interface AuthResponse {
  response: UserCredential;
  idToken: string;
}

export const getAuthResponse = async (email?: string, password?: string) => {
  const response = await firebase.auth().signInWithEmailAndPassword(email || 'test@test.com', password || 'test@123#');
  //@ts-ignore
  const idToken = await firebase.auth().currentUser.getIdToken(/* forceRefresh */ true);
  const authResponse: AuthResponse = {
    response,
    idToken
  };
  return authResponse;
};
