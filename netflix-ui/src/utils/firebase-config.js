
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCldzthEjuGY-JIHJ1yK-QUcBwYU32qFY4",
  authDomain: "react-netflix-clone-8ef0e.firebaseapp.com",
  projectId: "react-netflix-clone-8ef0e",
  storageBucket: "react-netflix-clone-8ef0e.appspot.com",
  messagingSenderId: "68443079812",
  appId: "1:68443079812:web:bcf2ee6f4e8df7e3356ed1",
  measurementId: "G-BP6LBV6VJ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebase= getAuth(app);