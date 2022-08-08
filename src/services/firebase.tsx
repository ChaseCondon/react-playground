// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7c5gnZuFmFq2FSu2NMZqd7fjxHwX2LsQ",
  authDomain: "chasecondon-sandbox.firebaseapp.com",
  projectId: "chasecondon-sandbox",
  storageBucket: "chasecondon-sandbox.appspot.com",
  messagingSenderId: "424182362664",
  appId: "1:424182362664:web:d67207746f24addc2fbb1d",
  measurementId: "G-Q8EY77FN8W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);