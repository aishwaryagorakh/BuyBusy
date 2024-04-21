// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE97VM1mCnvryVRHu708iZDd6pa-JNnQU",
  authDomain: "buybusy-253c0.firebaseapp.com",
  databaseURL: "https://buybusy-253c0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "buybusy-253c0",
  storageBucket: "buybusy-253c0.appspot.com",
  messagingSenderId: "110359475926",
  appId: "1:110359475926:web:7b5d4a2fbda43a3c5ffb77"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
