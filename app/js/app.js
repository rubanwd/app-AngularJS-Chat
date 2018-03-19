  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCkF1_U8LuyVapYo8cMjwLLRZlc1sXWFWA",
    authDomain: "cbschat-7d0e7.firebaseapp.com",
    databaseURL: "https://cbschat-7d0e7.firebaseio.com",
    storageBucket: "",
    messagingSenderId: "9807095414"
  };
  firebase.initializeApp(config);

angular.module('cbsChat', ['firebase']);