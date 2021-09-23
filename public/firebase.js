// Import the functions you need from the SDKs you need
import { initializeApp } from "./firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSl0YiNcxONrqwTRbTVG1gHAfbCB9yv3o",
  authDomain: "mic-test-293fc.firebaseapp.com",
  projectId: "mic-test-293fc",
  storageBucket: "mic-test-293fc.appspot.com",
  messagingSenderId: "175034479754",
  appId: "1:175034479754:web:3b5ef6ab1b68070a70e973"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log(app);