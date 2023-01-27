// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLyDwyqcLanp4qCHzI_AWwu9FJMGN3YB0",
  authDomain: "facturesacsa.firebaseapp.com",
  projectId: "facturesacsa",
  storageBucket: "facturesacsa.appspot.com",
  messagingSenderId: "370427363620",
  appId: "1:370427363620:web:03890200f54bcea47cf3b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export { auth }