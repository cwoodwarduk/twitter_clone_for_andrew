import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDI0kMmSssDhKPa6H5Ig9zHU6ZEkN_DIfk",
    authDomain: "twitter-clone-f0855.firebaseapp.com",
    databaseURL: "https://twitter-clone-f0855.firebaseio.com",
    projectId: "twitter-clone-f0855",
    storageBucket: "twitter-clone-f0855.appspot.com",
    messagingSenderId: "332121056168",
    appId: "1:332121056168:web:975960cc454fd492a0b39d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;