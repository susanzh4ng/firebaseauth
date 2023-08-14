import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  // ...
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
