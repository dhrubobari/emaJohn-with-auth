import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbvGORx5HrgsoqyNFcpbn5TkfE1qwVhK8",
  authDomain: "emajohn-d8d0a.firebaseapp.com",
  projectId: "emajohn-d8d0a",
  storageBucket: "emajohn-d8d0a.appspot.com",
  messagingSenderId: "112303125598",
  appId: "1:112303125598:web:2c775967cbc5cb5bdab0cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();

export default auth;