// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCf5fcBgT1gnYs7SGQkwYcDiK5RraBqeXQ",
  authDomain: "genius-car-services-20a7b.firebaseapp.com",
  projectId: "genius-car-services-20a7b",
  storageBucket: "genius-car-services-20a7b.appspot.com",
  messagingSenderId: "222814230231",
  appId: "1:222814230231:web:b48cf6eaba6062eaa7c292"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;