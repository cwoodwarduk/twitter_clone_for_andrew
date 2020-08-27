import React, { useState } from 'react';
import './LoginModal.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import FormInput from '../FormInput/FormInput';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import authMethods from '../../firebase/authmethods';
import firebase from 'firebase';

function LoginModal({handleOpen}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [userId, setUserId] = useState("");

    const closeHandler = (e) => {
        e.preventDefault();
        document.getElementById("modal").style.display = "none";
        
        handleOpen(false);
    }

    const loginHandler = (e) => {
        e.preventDefault();
        authMethods.signin(email, password);
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser){
                console.log('Logged in.');
            } else {
                console.log('Not logged in.');
            }
        });
    }

    return (
        <div className="loginModal" id="modal">

            <div className="loginModal__modalBox" >

                <div className="loginModal__top">
                    <TwitterIcon className="loginModal__twitterIcon" />
                    <CloseIcon className="loginModal__closeButton" onClick={(e) => closeHandler(e)} />
                </div>

                <h2>Login</h2>

                <FormInput fieldName="Email" fieldType="email" charLimit={0} setInput={setEmail} />
                <FormInput fieldName="Password" fieldType="password" charLimit={0} setInput={setPassword} />

                {/* <Button variant="outlined" className="loginModal_signUpButton" fullWidth>Login/Create Account</Button> */}
                <Button 
                    variant="outlined" 
                    className="loginModal_signUpButton" 
                    onClick={(e) => loginHandler(e)} 
                    fullWidth
                > 
                    Login
                </Button>


            </div>

        </div>
    )
    
}

export default LoginModal;
