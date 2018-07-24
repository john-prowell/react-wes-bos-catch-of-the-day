// Rebase allows us to mirror our state to our firebase
import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAQCseMjDqDPc4nUfWzgLJB_n81D6q0-eo",
  authDomain: "catch-of-the-day-dtroxx.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-dtroxx.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
