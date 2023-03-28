// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBf0g5OPpQK2g9cu0NKSvCyNgxF8kZ8-2s",
  authDomain: "e-commerce-eeb6a.firebaseapp.com",
  projectId: "e-commerce-eeb6a",
  storageBucket: "e-commerce-eeb6a.appspot.com",
  messagingSenderId: "708614800349",
  appId: "1:708614800349:web:75671764ed4bd37e222c34",
  measurementId: "G-GLFGSRYM6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

