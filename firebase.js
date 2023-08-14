import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDLVAyYcFjIosge-YMDzQbiWCfYV5kA6Vc",
  authDomain: "fir-auth-b5e9a.firebaseapp.com",
  projectId: "fir-auth-b5e9a",
  storageBucket: "fir-auth-b5e9a.appspot.com",
  messagingSenderId: "279613250045",
  appId: "1:279613250045:web:f3d2d1aa9386808eb8a194"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);