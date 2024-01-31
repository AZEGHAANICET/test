// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDSudgjrkVHbSBND2YnZonasl3CFT9BLGA",
    authDomain: "react-app-4f490.firebaseapp.com",
    projectId: "react-app-4f490",
    storageBucket: "react-app-4f490.appspot.com",
    messagingSenderId: "99861088728",
    appId: "1:99861088728:web:5e4f4597a87131ab6c0aad",
    measurementId: "G-FW2DX971X9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);