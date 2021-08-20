import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyC7b35get_IDjSGUVkY9JvqPZc0OqGjjHA",
    authDomain: "unichat-be491.firebaseapp.com",
    projectId: "unichat-be491",
    storageBucket: "unichat-be491.appspot.com",
    messagingSenderId: "972613283139",
    appId: "1:972613283139:web:f277ad91a56b6b94c313f6"
  }).auth();