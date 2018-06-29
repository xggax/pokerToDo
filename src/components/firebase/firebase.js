import Rebase from 're-base';
import firebase from 'firebase/app'; 
import 'firebase/auth'; 
import 'firebase/database';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCmSMOFak6bVVgjClGBzN2vSmTHKJVWcbg", //process.env.REACT_APP_FIREBASE_KEY 
    authDomain: "pokertodo-23459.firebaseapp.com",  //process.env.REACT_APP_FIREBASE_KEY_DOMAIN
    databaseURL: "https://pokertodo-23459.firebaseio.com",  //process.env.REACT_APP_FIREBASE_KEY_DATABASE
    projectId: "pokertodo-23459", //process.env.REACT_APP_FIREBASE_KEY_PROJECT_ID
    storageBucket: "pokertodo-23459.appspot.com",   //process.env.REACT_APP_FIREBASE_KEY_STORAGE_BUCKET
    messagingSenderId: "1056472146739"  //process.env.REACT_APP_FIREBASE_KEY_SENDER_ID
  };
  
  
  const fire = firebase.initializeApp(config);
  const database = firebase.database();
  const base = Rebase.createClass(fire.database());
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const auth = firebase.auth();

  export {
    fire,
    database, 
    base, 
    googleProvider,
    auth,
  };