import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAykTY69Kzza5rYWXdtsSExTMcHN3I5nJo",
  authDomain: "challenge-5a795.firebaseapp.com",
  databaseURL: "https://challenge-5a795.firebaseio.com",
  projectId: "challenge-5a795",
  storageBucket: "challenge-5a795.appspot.com",
  messagingSenderId: "851325482711",
  appId: "1:851325482711:web:0877c845c9b032bc28a292",
  measurementId: "G-5YBD1JTD31",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
