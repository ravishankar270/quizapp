// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {GoogleAuthProvider,getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCuqe7wBeHcE8cr0NxCkdPrBP3CqcY7E2o",
    authDomain: "quizapp-52083.firebaseapp.com",
    projectId: "quizapp-52083",
    storageBucket: "quizapp-52083.appspot.com",
    messagingSenderId: "366240735425",
    appId: "1:366240735425:web:f83e524c63d8c62a62b440"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
export const auth=getAuth(app)
export const provider=new GoogleAuthProvider