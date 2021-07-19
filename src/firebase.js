import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBGpwKtB92bIG4Tpv4lhpM1bX4DICrstpU",
    authDomain: "react-twitterclone-b37d0.firebaseapp.com",
    projectId: "react-twitterclone-b37d0",
    storageBucket: "react-twitterclone-b37d0.appspot.com",
    messagingSenderId: "757053913154",
    appId: "1:757053913154:web:fb487d9706b71a49e795db"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
const db = firebaseApp.firestore();

export default db;