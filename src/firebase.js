import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCV2LNXPZyMkbuGCvNT4V6uBkAVOEKSGj0",
    authDomain: "linkedin-clone-3418e.firebaseapp.com",
    projectId: "linkedin-clone-3418e",
    storageBucket: "linkedin-clone-3418e.appspot.com",
    messagingSenderId: "959968431138",
    appId: "1:959968431138:web:0d8ea6172f0f22f01c0e7b",
    measurementId: "G-KLKK25K3S3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };