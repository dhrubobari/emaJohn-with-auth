import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVGfqHAO5i2CBSwcvBKyErRzqNCSVg5y8",
  authDomain: "ema-john-simple-1d62a.firebaseapp.com",
  projectId: "ema-john-simple-1d62a",
  storageBucket: "ema-john-simple-1d62a.appspot.com",
  messagingSenderId: "831980576109",
  appId: "1:831980576109:web:a036e0aa14bc46f0fc8e64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;