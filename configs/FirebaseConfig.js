// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEi4FMn3_U7Z8rsLE5FlC60Xb3OtvlRJk",
  authDomain: "aidermat.firebaseapp.com",
  projectId: "aidermat",
  storageBucket: "aidermat.appspot.com",
  messagingSenderId: "938170489024",
  appId: "1:938170489024:web:b671bc43047fab72e3b525",
  measurementId: "G-TC4NW6358B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);