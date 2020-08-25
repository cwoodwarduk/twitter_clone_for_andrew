import React from 'react';
import './LoginModal.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import FormInput from '../FormInput/FormInput';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function LoginModal({handleOpen}) {

    const closeHandler = (e) => {
        e.preventDefault();
        document.getElementById("modal").style.display = "none";
        
        handleOpen(false);
    }

    return (
        <div className="loginModal" id="modal">

            <div className="loginModal__modalBox" >

                <div className="loginModal__top">
                    <TwitterIcon className="loginModal__twitterIcon" />
                    <CloseIcon className="loginModal__closeButton" onClick={(e) => closeHandler(e)} />
                </div>

                <h2>Login / Create Account</h2>

                <FormInput fieldName="Name" charLimit={50} />
                <FormInput fieldName="Username" charLimit={50} />
                <FormInput fieldName="Email" charLimit={0} />

                <Button variant="outlined" className="loginModal_signUpButton" fullWidth>Login/Create Account</Button>


            </div>

        </div>
    )
    
}

export default LoginModal;
