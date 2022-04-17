// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2Zrr_TuTssa8W0CpiGpxg3ZzQj16HzNM",
  authDomain: "martin-3012c.firebaseapp.com",
  projectId: "martin-3012c",
  storageBucket: "martin-3012c.appspot.com",
  messagingSenderId: "1024568523396",
  appId: "1:1024568523396:web:6acc5e0b866d4b3ca7e0d1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;