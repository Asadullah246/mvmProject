// import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import { getAuth } from 'firebase/auth';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBxooKHlAQClrBUrQQ8MVDLYA_5ulXEvbM",
  authDomain: "mvmiracles-64d7d.firebaseapp.com",
  projectId: "mvmiracles-64d7d",
  storageBucket: "mvmiracles-64d7d.appspot.com",
  messagingSenderId: "489320593363",
  appId: "1:489320593363:web:496ff9e938834660f26126", 
  measurementId: "G-XL6F1QFVFZ"
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// export const auth = getAuth(app);

// const db = getFirestore(app);

// async function getMovies() {
//   const moviesCol = collection(this.db, 'movies');
//   const moviesSnapshot = await getDocs(moviesCol);
//   const moviesList = moviesSnapshot.docs.map(doc => doc.data());
//   return moviesList;
// }
// export const movies = getMovies();
// export default app;
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;