// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "SENIN_API_KEY",
  authDomain: "SENIN_PROJECT_ID.firebaseapp.com",
  projectId: "SENIN_PROJECT_ID",
  storageBucket: "SENIN_PROJECT_ID.appspot.com",
  messagingSenderId: "SENIN_SENDER_ID",
  appId: "SENIN_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
