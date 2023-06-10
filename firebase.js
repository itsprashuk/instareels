
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC1kI6JiGcAqAQfQK0x5_bfVmquKcpM3co",
      authDomain: "ig-reels-e1956.firebaseapp.com",
      projectId: "ig-reels-e1956",
      storageBucket: "ig-reels-e1956.appspot.com",
      messagingSenderId: "871812389222",
      appId: "1:871812389222:web:cedc4ec2a42ed4967150a7"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;




  

 
