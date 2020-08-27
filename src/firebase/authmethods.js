// import firebaseConfig from './firebase.js';
import firebase from 'firebase';

export const authMethods = {

    signup: (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email,password) 
        .then(res => {
            console.log(res.user)
        })
        .catch(err => {
            console.error(err)
        })
    },

    signin: (email, password) => {
        firebase.auth().signInWithEmailAndPassword(email,password) 
        .then(res => {
            console.log(res.user)
        })
        .catch(err => {
            console.error(err)
        })
    },

    signout: () => {
        firebase.auth().signOut() 
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.error(err)
        })
    },

}

export default authMethods