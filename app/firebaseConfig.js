// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBC7l9_SD6tBheEJ2PYZLIktGaJNr_rXlo",
  authDomain: "orderyum-76e1c.firebaseapp.com",
  projectId: "orderyum-76e1c",
  storageBucket: "orderyum-76e1c.firebasestorage.app",
  messagingSenderId: "806442558519",
  appId: "1:806442558519:web:fcefe3246bde1802474bb2",
  measurementId: "G-QYE0H2KD8X"
};

// Initialize Firebase
const firebase= initializeApp(firebaseConfig);
const db = getFirestore(firebase);
const auth=getAuth(firebase);
export  {firebase,db,auth};