import * as firebase from 'firebase';
import Rebase from 're-base';

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCmSMOFak6bVVgjClGBzN2vSmTHKJVWcbg",
    authDomain: "pokertodo-23459.firebaseapp.com",
    databaseURL: "https://pokertodo-23459.firebaseio.com",
    projectId: "pokertodo-23459",
    storageBucket: "pokertodo-23459.appspot.com",
    messagingSenderId: "1056472146739"
  };
  
  
  const fire = firebase.initializeApp(config);
  //const database = firebase.database();
  const base = Rebase.createClass(fire.database());
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  export {
    fire, 
    base, 
    googleProvider,
  };