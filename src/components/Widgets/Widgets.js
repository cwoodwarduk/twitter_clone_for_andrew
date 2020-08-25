import React, { useState } from 'react';
import './Widgets.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed
} from 'react-twitter-embed';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import LoginModal from '../LoginModal/LoginModal';

function Widgets() {

    const [isClosed, setIsClosed] = useState(true);

    const handleOpen = () => {
        isClosed ? setIsClosed(false) : setIsClosed(true);
    }

    return (
        <div className="widgets">

            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__signUp">
                <h2>New here?</h2>
                <p>Sign up here to gain access to full functionality!</p>
                <Button variant="outlined" className="widgets_signUpButton" onClick={(e) => handleOpen()} fullWidth>Sign Up</Button>
                
                {
                    !isClosed &&
                    <LoginModal handleOpen={handleOpen} />
                }
                
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1283395388825841666"} />
                <TwitterTimelineEmbed 
                    sourceType="profile"
                    screenName="DougStanhope"
                    options={{ height: 400 }}
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
