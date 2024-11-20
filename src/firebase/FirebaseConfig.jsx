// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE_noLs9dFdTIrym80IjB5_dcHdm3-jqs",
  authDomain: "react-ecommerce-61787.firebaseapp.com",
  projectId: "react-ecommerce-61787",
  storageBucket: "react-ecommerce-61787.firebasestorage.app",
  messagingSenderId: "614129448298",
  appId: "1:614129448298:web:9b71450256ed700ab3a113",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
