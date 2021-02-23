import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBqj9K4ZJMfe3G50P5K8HNdikyMcpim2kI",
  authDomain: "slack-clone-8d5e8.firebaseapp.com",
  projectId: "slack-clone-8d5e8",
  storageBucket: "slack-clone-8d5e8.appspot.com",
  messagingSenderId: "596936815698",
  appId: "1:596936815698:web:6cb2846d44ae407e129b8b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
