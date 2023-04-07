// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcKD-1wXSQkhXvGvigMACfV9ewBDGbqHQ",
  authDomain: "bsfapp-ca8eb.firebaseapp.com",
  databaseURL: "https://bsfapp-ca8eb-default-rtdb.firebaseio.com",
  projectId: "bsfapp-ca8eb",
  storageBucket: "bsfapp-ca8eb.appspot.com",
  messagingSenderId: "1019835688604",
  appId: "1:1019835688604:web:975bea955c67a6a45faf59",
  measurementId: "G-FK9273BN3P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
