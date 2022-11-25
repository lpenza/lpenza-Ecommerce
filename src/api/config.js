// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5zUuq9ncY8i-C61amtqA5INazrGSG4_E",
  authDomain: "ecommerce-99137.firebaseapp.com",
  projectId: "ecommerce-99137",
  storageBucket: "ecommerce-99137.appspot.com",
  messagingSenderId: "717328229593",
  appId: "1:717328229593:web:096a6c5706ca718b34cac8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);