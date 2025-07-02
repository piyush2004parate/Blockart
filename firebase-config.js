import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBjGQU6kqGg9_TsRPDexQXVKlgE-sHHx-Q",
  authDomain: "e-commerce-26335.firebaseapp.com",
  projectId: "e-commerce-26335",
  storageBucket: "e-commerce-26335.appspot.com",
  messagingSenderId: "103472578351926624914",
  appId: "1:103472578351926624914:web:abcdef"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
