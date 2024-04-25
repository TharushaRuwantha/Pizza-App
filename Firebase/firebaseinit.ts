// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU9Xba_CxlZtBjlxiynVNPSJKqDxdavOQ",
  authDomain: "pizza-50300.firebaseapp.com",
  projectId: "pizza-50300",
  storageBucket: "pizza-50300.appspot.com",
  messagingSenderId: "732688214467",
  appId: "1:732688214467:web:03d364b6ccfbd33d783576",
  measurementId: "G-56BRNM4D1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);