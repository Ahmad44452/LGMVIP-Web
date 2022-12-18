import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyB1UynXy912ccbA_exr3nbj1htMdgNz5zQ",
  authDomain: "todolist-9edbd.firebaseapp.com",
  projectId: "todolist-9edbd",
  storageBucket: "todolist-9edbd.appspot.com",
  messagingSenderId: "862485666540",
  appId: "1:862485666540:web:670d756a741c7d055c63c9",
  measurementId: "G-4GYH9J1T86"
};


initializeApp(firebaseConfig);

// init firestore
const db = getFirestore();

// init firebase auth
const auth = getAuth();

export { db, auth };