import * as firebase from 'firebase'
require('@firebase/firestore');




var firebaseConfig = {
    apiKey: "AIzaSyAUc6L7PNRGCt_kUuCmbXxp8f_HuZaJUr0",
    authDomain: "willy-app-ba8fd.firebaseapp.com",
    databaseURL: "https://willy-app-ba8fd.firebaseio.com",
    projectId: "willy-app-ba8fd",
    storageBucket: "willy-app-ba8fd.appspot.com",
    messagingSenderId: "263163839936",
    appId: "1:263163839936:web:5b7065ec2ab1e610a4b425"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore();