import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDN5hZfKOlltQRLwbLtj8ojRm9hukqX6uY",
  authDomain: "gmpesa-820f5.firebaseapp.com",
  projectId: "gmpesa-820f5",
  storageBucket: "gmpesa-820f5.appspot.com",
  messagingSenderId: "324720896286",
  appId: "1:324720896286:web:db3247109e0aa909d4c10f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
