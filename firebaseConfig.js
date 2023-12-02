// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);