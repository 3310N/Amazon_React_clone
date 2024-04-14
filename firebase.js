

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCfsMDfMPt7v6lD226ijtm3NCOyfYVn_oA",
    authDomain: "amzn-2-intern.firebaseapp.com",
    projectId: "amzn-2-intern",
    storageBucket: "amzn-2-intern.appspot.com",
    messagingSenderId: "374686782342",
    appId: "1:374686782342:web:4746789ee2273a29fd5207"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db = app.firestore();
  export default db;