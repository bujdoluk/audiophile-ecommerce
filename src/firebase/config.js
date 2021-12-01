import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {

    apiKey: "AIzaSyCV6qm-e-M3O5A7sqmKQehiaVpxKWcDAoc",

    authDomain: "audiophile-ecommerce-556bc.firebaseapp.com",

    projectId: "audiophile-ecommerce-556bc",

    storageBucket: "audiophile-ecommerce-556bc.appspot.com",

    messagingSenderId: "31984561681",

    appId: "1:31984561681:web:cf6b2fa7ea28c585ddcbb0"

};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

export { projectAuth, projectFirestore }