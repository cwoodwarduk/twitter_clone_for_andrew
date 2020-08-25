import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from '../../firebase';
import firebase from 'firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection('posts').add({
            avatar: "https://avatars2.githubusercontent.com/u/54438992?s=400&u=1851015ae1e0dc7269acf7ac41194e6ab8fb0672&v=4",
            displayName: "Calum",
            username: "cwdevuk",
            verified: true,
            postedAt: firebase.firestore.Timestamp.fromDate(new Date()),
            text: tweetMessage,
            image: tweetImage
        })

        setTweetMessage("");
        setTweetImage("");
    } 

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://avatars2.githubusercontent.com/u/54438992?s=400&u=1851015ae1e0dc7269acf7ac41194e6ab8fb0672&v=4"></Avatar>
                    <input 
                        onChange={(e) => setTweetMessage(e.target.value)}
                        value={tweetMessage}  
                        placeholder="What's happening?" 
                        type="text"
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)} 
                    className="tweetBox__imageInput" 
                    placeholder="Enter gif URL (Giphy only!)" 
                    type="text"
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__button">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
