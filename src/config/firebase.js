// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBP4Wx8xVLRSPYzW7Q4Q27TjF01s87TIIA",
  authDomain: "test-app-d82df.firebaseapp.com",
  projectId: "test-app-d82df",
  storageBucket: "test-app-d82df.appspot.com",
  messagingSenderId: "612700172327",
  appId: "1:612700172327:web:0268c59970d4f217055e02"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
