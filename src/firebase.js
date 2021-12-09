import firebase from "firebase"
//Authentication
import 'firebase/auth'

// firestore database
import 'firebase/firestore'
//real time database
import 'firebase/database'
// storage
import 'firebase/storage'
// function
// import 'firebase/function'
// hosting

// Import the functions you need from the SDKs you need


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZ1TAdZX2-03-CfxHYIgmT1gxssJ3dz44",
  authDomain: "spotify-clone-3bf8f.firebaseapp.com",
  projectId: "spotify-clone-3bf8f",
  storageBucket: "spotify-clone-3bf8f.appspot.com",
  messagingSenderId: "475157388042",
  appId: "1:475157388042:web:9ef644e99dcac19cfa78f3"
};

// Initialize Firebase
firebase. initializeApp(firebaseConfig);

export default firebase;