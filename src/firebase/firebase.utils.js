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


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('Error creating user', e.message);
        }

    }
    return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;
