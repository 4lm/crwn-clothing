import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const CONFIG = {
  apiKey: "AIzaSyCNHGiewhYs9XF5V_fx1sjtPHSEwE4r1Bk",
  authDomain: "crwn-clothing-5881c.firebaseapp.com",
  databaseURL: "https://crwn-clothing-5881c.firebaseio.com",
  projectId: "crwn-clothing-5881c",
  storageBucket: "",
  messagingSenderId: "1016714024101",
  appId: "1:1016714024101:web:a327b5d30975fb76"
}

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
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(CONFIG);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
