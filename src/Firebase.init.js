
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from 'firebase/storage';


// const firebaseConfig = {
//   apiKey: "AIzaSyBgZNfOqmAvPloJo4veoDFYOLdIWhd7eqo",
//   authDomain: "mvm-project-f1486.firebaseapp.com",
//   projectId: "mvm-project-f1486",
//   storageBucket: "mvm-project-f1486.appspot.com",
//   messagingSenderId: "279995351626",
//   appId: "1:279995351626:web:e8db7252cf5346095bdcb3",
//   measurementId: "G-DFH1LSG4LB"
// };

const firebaseConfig = {
  apiKey: "AIzaSyBxooKHlAQClrBUrQQ8MVDLYA_5ulXEvbM",
  authDomain: "mvmiracles-64d7d.firebaseapp.com",
  projectId: "mvmiracles-64d7d",
  storageBucket: "mvmiracles-64d7d.appspot.com",
  messagingSenderId: "489320593363",
  appId: "1:489320593363:web:496ff9e938834660f26126", 
  measurementId: "G-XL6F1QFVFZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app)
const db = firebaseApp.firestore();
// const auth = firebase.auth();
const storage = getStorage(firebaseApp); 

export {  db, storage };

export default auth;