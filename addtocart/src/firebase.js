import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCOaOumFPw31JxpXhzEPDr1quiqM8YlDaw",
  authDomain: "food-court-95ed5.firebaseapp.com",
  projectId: "food-court-95ed5",
  storageBucket: "food-court-95ed5.appspot.com",
  messagingSenderId: "873959065336",
  appId: "1:873959065336:web:3489272927cdff15d6dd0d",
  measurementId: "G-EF5EDNKR8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAuth(app);
export {auth}