// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";  // Import the initializeApp function from the Firebase app module
import { getFirestore } from "firebase/firestore";  // Import the getFirestore function from the Firebase firestore module

// TODO: Add SDKs for Firebase products that you want to use
// For additional Firebase products, you can import their functions here.
// For example, if you want to use Firebase Authentication, you would import the necessary functions for authentication.

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1boYMspExIZJioIXZydChH5qYhjRkmUM",  // Replace with your Firebase API key
  authDomain: "texas-golf-center.firebaseapp.com",  // Replace with your Firebase Auth domain
  projectId: "texas-golf-center",  // Replace with your Firebase project ID
  storageBucket: "texas-golf-center.appspot.com",  // Replace with your Firebase storage bucket
  messagingSenderId: "963556922158",  // Replace with your Firebase messaging sender ID
  appId: "1:963556922158:web:d72485a32092760b91a0bf",  // Replace with your Firebase app ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  // Initialize Firebase with the provided configuration
export const db = getFirestore(app);  // Export the Firestore database instance for use in other parts of your application
