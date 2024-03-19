// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAghYms67wNniNKqKj_ztRxESCx5eQgUIo",
  authDomain: "workshop-ecommerce-b1.firebaseapp.com",
  projectId: "workshop-ecommerce-b1",
  storageBucket: "workshop-ecommerce-b1.appspot.com",
  messagingSenderId: "449581526280",
  appId: "1:449581526280:web:b6a5aae9b6f544535cd0bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore( app )