import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADXssndb7-URj7EAYJ-EplnKy0dO8c5Yw",
  authDomain: "imdb-aa0a0.firebaseapp.com",
  projectId: "imdb-aa0a0",
  storageBucket: "imdb-aa0a0.appspot.com",
  messagingSenderId: "436990648690",
  appId: "1:436990648690:web:2f02be1ff9210d23143deb",
  measurementId: "G-CBH7LH7QJ4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db }