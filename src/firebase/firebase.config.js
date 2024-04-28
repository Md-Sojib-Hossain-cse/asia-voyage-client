// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: import.meta.process.env.API_KEY,
    // authDomain: import.meta.process.env.AUTH_DOMAIN,
    // projectId: import.meta.process.env.PROJECT_ID,
    // storageBucket: import.meta.process.env.STORAGE_BUCKET,
    // messagingSenderId: import.meta.process.env.MESSAGING_SENDER_ID,
    // appId: import.meta.process.env.APP_ID
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