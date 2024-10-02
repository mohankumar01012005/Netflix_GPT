// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl7xX7RyiqZtCcVsquoCKUCU_2WPoFL_8",
  authDomain: "netlixgpt-d168c.firebaseapp.com",
  projectId: "netlixgpt-d168c",
  storageBucket: "netlixgpt-d168c.appspot.com",
  messagingSenderId: "890307580440",
  appId: "1:890307580440:web:62f1d27d6376c50d2d696d",
  measurementId: "G-31J7W1M2FB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
