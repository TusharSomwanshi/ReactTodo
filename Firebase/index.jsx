import firebase from 'firebase';


  // Initialize Firebase
  var config = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
