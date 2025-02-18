import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCWLkec6nyly81UPgDHxY-PvEQEnsHOXy8",
  authDomain: "chat-6a887.firebaseapp.com",
  projectId: "chat-6a887",
  storageBucket: "chat-6a887.firebasestorage.app",
  messagingSenderId: "950422571405",
  appId: "1:950422571405:web:eda2f84276a7e7edbbd5c4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);