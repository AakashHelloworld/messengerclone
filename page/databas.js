import firebase from "firebase"

const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyC-hezM8lAM6bl1nlWQoPTTxXlUBzB3EEE",
    authDomain: "asdfgh-5a52b.firebaseapp.com",
    projectId: "asdfgh-5a52b",
    storageBucket: "asdfgh-5a52b.appspot.com",
    messagingSenderId: "402573228983",
    appId: "1:402573228983:web:7abae0ac8ac1a6e1ef4632",
    measurementId: "G-8W2KRZDEQJ"
});
   
const db = firebaseapp.firestore();
export default db ;