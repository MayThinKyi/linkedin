// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDaYyFtNGdUl-XVkoZb_ExGD8-ReBtul_0",
  authDomain: "react-linkedin-1179a.firebaseapp.com",
  projectId: "react-linkedin-1179a",
  storageBucket: "react-linkedin-1179a.appspot.com",
  messagingSenderId: "164876657938",
  appId: "1:164876657938:web:d08740e3a529572d7bffcb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore();

export { auth, db };