import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB8utNlhGyXPeJKQOAtu72N4DWzkB5mxTE",
    authDomain: "todo-app-3def2.firebaseapp.com",
    projectId: "todo-app-3def2",
    storageBucket: "todo-app-3def2.appspot.com",
    messagingSenderId: "665707677403",
    appId: "1:665707677403:web:383b5c528668c5f817eefe"
  };

  export const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();