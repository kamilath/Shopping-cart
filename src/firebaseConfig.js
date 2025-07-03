// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0V5TH6daEZXMjbVPJGHpNBgJOOacrI4Q",
  authDomain: "ecommerce-354cd.firebaseapp.com",
  projectId: "ecommerce-354cd",
  storageBucket: "ecommerce-354cd.firebasestorage.app",
  messagingSenderId: "314560577473",
  appId: "1:314560577473:web:b8d8ecab6f4c91ceaab940",
  measurementId: "G-MSRQ48X3N8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
