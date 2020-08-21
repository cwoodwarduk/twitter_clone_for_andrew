import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://avatars2.githubusercontent.com/u/54438992?s=400&u=1851015ae1e0dc7269acf7ac41194e6ab8fb0672&v=4"></Avatar>
                    <input placeholder="What's happening?" type="text"/>
                </div>
                <input className="tweetBox__imageInput" placeholder="Enter image URL" type="text"/>
                <Button className="tweetBox__button">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
