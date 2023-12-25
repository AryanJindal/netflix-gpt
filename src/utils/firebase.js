// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5sp7ChXbnUPZMRuspcAIw_FNqdq9uM3M",
  authDomain: "netflixgpt-22ee4.firebaseapp.com",
  projectId: "netflixgpt-22ee4",
  storageBucket: "netflixgpt-22ee4.appspot.com",
  messagingSenderId: "393507856670",
  appId: "1:393507856670:web:aa68e1680cc50c9777290f",
  measurementId: "G-R782BPKLM1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();