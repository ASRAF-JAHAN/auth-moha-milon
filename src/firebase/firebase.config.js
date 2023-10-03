// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAB9Mbb277_oHazAWEIb-oOTUHHSMw_uOc",
  authDomain: "auth-moha-milon-e6518.firebaseapp.com",
  projectId: "auth-moha-milon-e6518",
  storageBucket: "auth-moha-milon-e6518.appspot.com",
  messagingSenderId: "34429228054",
  appId: "1:34429228054:web:a22223640f5bc97e3a9137"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;