
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence,
  getAuth,
  Auth,
} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { firebaseConfig } from './firebaseConfig';
import { getFirestore, Firestore } from 'firebase/firestore';

let app: FirebaseApp;
let auth: Auth;

if (getApps().length < 1) {
  app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage),
  });
} else {
  app = getApp();
  auth = getAuth(app);
}

const db: Firestore = getFirestore(app);

export { auth, db };
