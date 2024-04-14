import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyDc8710pNnxsTFScU4THLn3Bq7dCNKnUtQ",
    authDomain: "e-commerce-534f8.firebaseapp.com",
    projectId: "e-commerce-534f8",
    storageBucket: "e-commerce-534f8.appspot.com",
    messagingSenderId: "148854132892",
    appId: "1:148854132892:web:96d602b41e922542861d59"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
