import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { setPersistence, browserLocalPersistence } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCjLVUF_wyjlduSuCi_4DEyKXOt8JjEvsQ",
  authDomain: "coachpulse-87341.firebaseapp.com",
  projectId: "coachpulse-87341",
  storageBucket: "coachpulse-87341.firebasestorage.app",
  messagingSenderId: "440637829553",
  appId: "1:440637829553:web:96fdc2e49e5e58fed18d90"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
setPersistence(auth, browserLocalPersistence);
export const db = getFirestore(app);