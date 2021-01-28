import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAZS90TYJb1ki5h1thjE3C7M0m0FsXshLo",
  authDomain: "mobilouz-5bf91.firebaseapp.com",
  projectId: "mobilouz-5bf91",
  storageBucket: "mobilouz-5bf91.appspot.com",
  messagingSenderId: "292795571819",
  appId: "1:292795571819:web:ceb8bd494ec08b6a099b2e",
  measurementId: "G-WRJSCLCTT6"
};

firebase.initializeApp(config);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase; 