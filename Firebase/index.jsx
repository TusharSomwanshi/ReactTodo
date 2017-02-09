import firebase from 'firebase';


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBafuibK96_IBGgq3CqKjWybnYKuIny0y0",
    authDomain: "tushar-todo-app.firebaseapp.com",
    databaseURL: "https://tushar-todo-app.firebaseio.com",
    storageBucket: "tushar-todo-app.appspot.com",
    messagingSenderId: "720607051888"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
