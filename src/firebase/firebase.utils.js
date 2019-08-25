import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyD7Qrf-yKEOuWMoXjnwJ5kzl3Ifk7r-rds",
    authDomain: "crwn-db-b9ba5.firebaseapp.com",
    databaseURL: "https://crwn-db-b9ba5.firebaseio.com",
    projectId: "crwn-db-b9ba5",
    storageBucket: "",
    messagingSenderId: "1011244795055",
    appId: "1:1011244795055:web:8433c2054addb482"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
