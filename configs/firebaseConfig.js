// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-marketplace-efd80.firebaseapp.com",
  projectId: "car-marketplace-efd80",
  storageBucket: "car-marketplace-efd80.appspot.com",
  messagingSenderId: "391346066643",
  appId: "1:391346066643:web:d71192e2b9c960d7383026",
  measurementId: "G-ESXL9T4WTV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);