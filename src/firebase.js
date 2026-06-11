import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBgldt7mn0nb_29rf4GYlA_Y4quOM6w8qY",
  authDomain: "contact-portfolio-de2d7.firebaseapp.com",
  databaseURL: "https://contact-portfolio-de2d7-default-rtdb.firebaseio.com",
  projectId: "contact-portfolio-de2d7",
  storageBucket: "contact-portfolio-de2d7.firebasestorage.app",
  messagingSenderId: "954243366050",
  appId: "1:954243366050:web:6c37dc1f750ff948816bfb",
  measurementId: "G-Y2RYS4VHWB"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);