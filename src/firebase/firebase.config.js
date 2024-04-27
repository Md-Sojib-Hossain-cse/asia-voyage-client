// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAz1WEidoUyBiu73lCukaOd-czT0RULays",
    authDomain: "asia-voyage.firebaseapp.com",
    projectId: "asia-voyage",
    storageBucket: "asia-voyage.appspot.com",
    messagingSenderId: "150877176990",
    appId: "1:150877176990:web:3ccd7ef89008f7fa67e78f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;