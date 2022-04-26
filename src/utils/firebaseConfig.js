// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ8gJVh948zo7ivdY6zDmHXeTtH2zit7o",
  authDomain: "musicastore-react-app.firebaseapp.com",
  projectId: "musicastore-react-app",
  storageBucket: "musicastore-react-app.appspot.com",
  messagingSenderId: "180848854364",
  appId: "1:180848854364:web:6161e04febd6b8175a6d99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;