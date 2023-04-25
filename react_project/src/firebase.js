import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

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
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);