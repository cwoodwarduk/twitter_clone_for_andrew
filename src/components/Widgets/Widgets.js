import React, { useState } from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import SignupModal from '../SignupModal/SignupModal';
import firebase from 'firebase';
import authmethods from '../../firebase/authmethods';

function Widgets() {

    const [isAuth, setIsAuth] = useState(false);
    const [isClosed, setIsClosed] = useState(true);
  
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser){
            setIsAuth(true);
        } else {
            setIsAuth(false);
        }
    });

    const handleOpen = () => {
        isClosed ? setIsClosed(false) : setIsClosed(true);
    }

    const handleLogout = () => {
        authmethods.signout();
    }

    return (
        <div className="widgets">

            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            {
                !isAuth ?
                <div className="widgets__signUp">
                    <h2>New here?</h2>
                    <p>Sign up here to gain access to full functionality!</p>
                    <Button variant="outlined" className="widgets_signUpButton" onClick={(e) => handleOpen()} fullWidth>Sign up</Button>
                </div>

                :

                <div className="widgets__logoutContainer">
                    <Button variant="outlined" className="widgets_logoutButton" onClick={(e) => handleLogout()}>Log out</Button>
                </div>

            }
                
            {
                !isClosed &&
                <SignupModal handleOpen={handleOpen} />
            }
                
            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                {/* <TwitterTweetEmbed 
                    tweetId={"1283395388825841666"}
                    data-width="100"
                /> */}
                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="DougStanhope"
                    options={{ height: 600 }}
                />
                <TwitterShareButton 
                    url={"https://www.linkedin.com/in/calum-woodward/"}
                    options={{ text: "He made a Twitter clone for a fiver!"}}
                />
            </div>

        </div>
    )
}

export default Widgets;
