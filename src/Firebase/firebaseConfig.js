import firebase from 'firebase/app'
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyAdc4t8xxdfCg9eFUBtxyBlEzz1_eh07GU",
    authDomain: "fulbito-6530a.firebaseapp.com",
    databaseURL: "https://fulbito-6530a-default-rtdb.firebaseio.com",
    projectId: "fulbito-6530a",
    storageBucket: "fulbito-6530a.appspot.com",
    messagingSenderId: "176981105398",
    appId: "1:176981105398:web:b10bac6d5ff3e3a8126ad7",
    measurementId: "G-M6J15SD2BS"
  };
  const fb = firebase.initializeApp(firebaseConfig);

  //disponible para usar donde sea
  export const dataBasefb = fb.firestore();