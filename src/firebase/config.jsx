// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYHZgtNpQDgJX_osINbmLt-hjgB6O68bI",
  authDomain: "miniblog-fb580.firebaseapp.com",
  projectId: "miniblog-fb580",
  storageBucket: "miniblog-fb580.appspot.com",
  messagingSenderId: "407979009184",
  appId: "1:407979009184:web:2b4435c5f45162cb8415c5",
  measurementId: "G-ED57QVJH0H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
