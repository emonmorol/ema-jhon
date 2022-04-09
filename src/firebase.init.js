// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXlRO03dt8CHgKEyhcTZ9s-EsKUYsTyzI",
  authDomain: "ema-jhon-91673.firebaseapp.com",
  projectId: "ema-jhon-91673",
  storageBucket: "ema-jhon-91673.appspot.com",
  messagingSenderId: "66930042554",
  appId: "1:66930042554:web:16f726dcb9f6212ab68483",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
