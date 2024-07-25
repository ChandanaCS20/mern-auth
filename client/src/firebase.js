// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-e9804.firebaseapp.com",
  projectId: "mern-auth-e9804",
  storageBucket: "mern-auth-e9804.appspot.com",
  messagingSenderId: "657785011622",
  appId: "1:657785011622:web:e0af6e8e35d3522124a367",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
