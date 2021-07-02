import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDvuQBY1oLF_0LiBaqippcV7tT-XmacS9Y",
    authDomain: "ellie-baptism.firebaseapp.com",
    projectId: "ellie-baptism",
    storageBucket: "ellie-baptism.appspot.com",
    messagingSenderId: "244752036195",
    appId: "1:244752036195:web:4092cf2b76d58c2b9aa356"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;