import firebase from 'firebase/app'
import { notification } from 'antd'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyAz9Wqm1oDR9ZO4DPO-bdwIKCPyry5P7Dk',
  authDomain: 'minze-project.firebaseapp.com',
  databaseURL: 'https://minze-project.firebaseio.com',
  projectId: 'minze-project',
  storageBucket: 'minze-project.appspot.com',
  messagingSenderId: '728730806850',
  appId: '1:728730806850:web:40fcd03a333dd268ed5bdb',
  measurementId: 'G-V1QNBE8NP4',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firebaseAuth = firebase.auth
export default firebaseApp

export async function login(email, password) {
  return firebaseAuth()
    .signInWithEmailAndPassword(email, password)
    .then(() => true)
    .catch(error => {
      notification.warning({
        message: error.code,
        description: error.message,
      })
    })
}

export async function signup(email, password) {
  return firebaseAuth()
    .createUserWithEmailAndPassword(email, password)
    .then(creds => creds.user.sendEmailVerification())
    .then(() => {
      notification.info({
        message: 'Email verification link was sent',
        description: 'Click on the link to verify your email',
      })
    })
    .then(() => true)
    .catch(error => {
      notification.warning({
        message: error.code,
        description: error.message,
      })
    })
}

export async function resetPassword(email) {
  return firebaseAuth()
    .sendPasswordResetEmail(email)
    .then(() => {
      notification.info({
        message: 'Password Reset link was sent successfully',
        description: 'Click on the link to reset your password',
      })
    })
    .then(() => true)
    .catch(error => {
      notification.warning({
        message: error.code,
        description: error.message,
      })
    })
}

export async function currentAccount() {
  let userLoaded = false
  function getCurrentUser(auth) {
    return new Promise((resolve, reject) => {
      if (userLoaded) {
        resolve(firebaseAuth.currentUser)
      }
      const unsubscribe = auth.onAuthStateChanged(user => {
        userLoaded = true
        unsubscribe()
        resolve(user)
      }, reject)
    })
  }
  return getCurrentUser(firebaseAuth())
}

export async function logout() {
  return firebaseAuth()
    .signOut()
    .then(() => true)
}
