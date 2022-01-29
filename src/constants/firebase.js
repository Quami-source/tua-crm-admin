// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";

import'firebase/database'
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyAdam0-vcYhkeuMquhb1GlgKBM35umaZ0c",
  authDomain: "iwork-clone.firebaseapp.com",
  databaseURL: "https://iwork-clone-default-rtdb.firebaseio.com",
  projectId: "iwork-clone",
  storageBucket: "iwork-clone.appspot.com",
  messagingSenderId: "824569365355",
  appId: "1:824569365355:web:96d011958732e6b6c0822e",
  measurementId: "G-HTQ3VVWS70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const database = getDatabase(app)

export default database;