import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCcLJ6JwFCdZXOJ8rz92q2B3su1bSr9AVg",
  authDomain: "prezenty-app.firebaseapp.com",
  databaseURL: "https://prezenty-app.firebaseio.com",
  projectId: "prezenty-app",
  storageBucket: "prezenty-app.appspot.com",
  messagingSenderId: "387528310716"
};

firebase.initializeApp(config);

export default firebase;
