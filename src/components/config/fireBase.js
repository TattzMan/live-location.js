import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD9lbKyl6QTiOZLEm7005VHI8lDgoYHTQA",
  authDomain: "truckers-cace6.firebaseapp.com",
  projectId: "truckers-cace6",
  storageBucket: "truckers-cace6.appspot.com",
  messagingSenderId: "355769728168",
  appId: "1:355769728168:web:0960c6b40f0fcdfd58569d",
  measurementId: "G-CJPGMZJBSD"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);