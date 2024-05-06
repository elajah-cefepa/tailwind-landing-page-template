// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB0-uePYvmFXk2KJjttpSJ9f5FdmwoSDIU",
  authDomain: "employee-portal-8f758.firebaseapp.com",
  databaseURL: "https://employee-portal-8f758-default-rtdb.firebaseio.com",
  projectId: "employee-portal-8f758",
  storageBucket: "employee-portal-8f758.appspot.com",
  messagingSenderId: "19111211270",
  appId: "1:19111211270:web:16037d181c698ba72eae87",
  measurementId: "G-GWKCJLPHRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { app, firestore};