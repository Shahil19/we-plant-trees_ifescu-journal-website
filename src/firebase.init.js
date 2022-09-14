// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBnz6sP8nKQjyKt-hTOVK3FseeefLiGRy8",
    authDomain: "ifescu-project.firebaseapp.com",
    projectId: "ifescu-project",
    storageBucket: "ifescu-project.appspot.com",
    messagingSenderId: "268724073256",
    appId: "1:268724073256:web:5ac2b2668de1b2d01d161d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth