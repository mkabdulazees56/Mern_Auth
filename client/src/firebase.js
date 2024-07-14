// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRBASE_API_KEY,
  authDomain: "mern-auth-242ad.firebaseapp.com",
  projectId: "mern-auth-242ad",
  storageBucket: "mern-auth-242ad.appspot.com",
  messagingSenderId: "429155790269",
  appId: "1:429155790269:web:ae1ddb26529ddd1ab6f6d4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);