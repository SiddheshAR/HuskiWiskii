// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZJpLAUVLOqe_yvYPuncrL1xQoz8-QHcQ",
  authDomain: "huski-wiski.firebaseapp.com",
  projectId: "huski-wiski",
  storageBucket: "huski-wiski.appspot.com",
  messagingSenderId: "1030181300610",
  appId: "1:1030181300610:web:cc7065aa045596bee0879b",
  measurementId: "G-WTJ0Q34CMF",
  databaseURL:"https://huski-wiski-default-rtdb.asia-southeast1.firebasedatabase.app"
};
// 
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);