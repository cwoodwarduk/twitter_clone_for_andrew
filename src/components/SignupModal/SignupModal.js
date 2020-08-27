import React, { useState } from 'react';
import './SignupModal.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import FormInput from '../FormInput/FormInput';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import authMethods from '../../firebase/authmethods';
import firebase from 'firebase';

function SignupModal({handleOpen}) {

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const closeHandler = (e) => {
        e.preventDefault();
        document.getElementById("modal").style.display = "none";
        
        handleOpen(false);
    }

    const signupHandler = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(username);
        authMethods.signup(email, password);
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser){
                console.log(firebaseUser);
            } else {
                console.log('Not logged in.')
            }
        })
    }

    return (
        <div className="signupModal" id="modal">

            <div className="signupModal__modalBox" >

                <div className="signupModal__top">
                    <TwitterIcon className="signupModal__twitterIcon" />
                    <CloseIcon className="signupModal__closeButton" onClick={(e) => closeHandler(e)} />
                </div>

                <h2>Create Account</h2>

                <FormInput fieldName="Name" fieldType="text" charLimit={50} setInput={setName} />
                <FormInput fieldName="Username" fieldType="text" charLimit={50} setInput={setUsername} />
                <FormInput fieldName="Email" fieldType="email" charLimit={0} setInput={setEmail} />
                <FormInput fieldName="Password" fieldType="password" charLimit={0} setInput={setPassword} />

                <Button 
                    variant="outlined" 
                    className="signupModal_signUpButton" 
                    onClick={(e) => signupHandler(e)} 
                    fullWidth
                > 
                    Create Account
                </Button>


            </div>

        </div>
    )
    
}

export default SignupModal;
