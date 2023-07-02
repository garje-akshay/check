import React from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  return <div>Check</div>;
}

export default App;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLnfgDQMEpcZLQAMktR1fJVAFFNFu1I2A",
  authDomain: "check-7c2e2.firebaseapp.com",
  projectId: "check-7c2e2",
  storageBucket: "check-7c2e2.appspot.com",
  messagingSenderId: "698273668191",
  appId: "1:698273668191:web:a71e93c4a8414adb57cfea",
  measurementId: "G-YPC197MZJW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
