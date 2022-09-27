
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBgZNfOqmAvPloJo4veoDFYOLdIWhd7eqo",
  authDomain: "mvm-project-f1486.firebaseapp.com",
  projectId: "mvm-project-f1486",
  storageBucket: "mvm-project-f1486.appspot.com",
  messagingSenderId: "279995351626",
  appId: "1:279995351626:web:e8db7252cf5346095bdcb3",
  measurementId: "G-DFH1LSG4LB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)

export default auth;