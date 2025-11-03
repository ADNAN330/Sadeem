import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAEpM0tAc8FYPLQZsUueL1lbv7RV3qMtZg",
  authDomain: "sadeem-f109f.firebaseapp.com",
  projectId: "sadeem-f109f",
  storageBucket: "sadeem-f109f.firebasestorage.app",
  messagingSenderId: "372363836755",
  appId: "1:372363836755:web:03668c80ba6d04d78df5a6"
};


const app = initializeApp(firebaseConfig);
const db:any = getFirestore(app); 

export { db };
export default app;

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();