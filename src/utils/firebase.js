// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMoPiRNhCAVXpfq-iWS9uLxEq8xma-HDw",
  authDomain: "netflix-clone-2ef27.firebaseapp.com",
  projectId: "netflix-clone-2ef27",
  storageBucket: "netflix-clone-2ef27.appspot.com",
  messagingSenderId: "115504525864",
  appId: "1:115504525864:web:e1805484ea9dbef099bb1d",
  measurementId: "G-CN6JBCQK3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
