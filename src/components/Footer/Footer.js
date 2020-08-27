import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './Footer.css';
import LoginModal from '../LoginModal/LoginModal';
import SignupModal from '../SignupModal/SignupModal';

function Footer() {

    const [isLoginClosed, setIsLoginClosed] = useState(true);
    const [isSignupClosed, setIsSignupClosed] = useState(true);

    const handleOpenLogin = () => {
        isLoginClosed ? setIsLoginClosed(false) : setIsLoginClosed(true);
    }

    const handleOpenSignup = () => {
        isSignupClosed ? setIsSignupClosed(false) : setIsSignupClosed(true);
    }

    return (
        <div className="footer">
            <div className="footer__left"></div>

            <div className="footer__centre">
                <h2>Hey! Login is down here!</h2>
                <p>No, I have no idea why the real Twitter put it down here either.</p>
            </div>

            <div className="footer__right">
                <div className="footer_buttonContainer">
                    <Button onClick={(e) => handleOpenLogin()} type="submit" className="footer__loginButton">Log in</Button>
                    <Button onClick={(e) => handleOpenSignup()} type="submit" className="footer__signupButton">Sign up</Button>

                    {
                        !isLoginClosed &&
                        <LoginModal handleOpen={handleOpenLogin} />
                    }

                    {
                        !isSignupClosed &&
                        <SignupModal handleOpen={handleOpenSignup} />
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer;
