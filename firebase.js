// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDvoMx_tSopWiqdfO8rf53Ak6fd76xMFaY",
    authDomain: "tinder-b3029.firebaseapp.com",
    projectId: "tinder-b3029",
    storageBucket: "tinder-b3029.appspot.com",
    messagingSenderId: "637577734809",
    appId: "1:637577734809:web:d02bcb990634e7fbf5a608",
    measurementId: "G-Z236JNQT98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
export {auth , db}
