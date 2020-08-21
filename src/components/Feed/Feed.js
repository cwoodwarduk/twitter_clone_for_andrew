import React, { useState } from 'react';
import './Feed.css';
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';

function Feed() {

    const [posts, setPosts] = useState([]);

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Feed</h2>
            </div>

            <TweetBox />

            <Post 
                avatar="https://avatars2.githubusercontent.com/u/54438992?s=400&u=1851015ae1e0dc7269acf7ac41194e6ab8fb0672&v=4"
                displayName="Calum"
                username="cwdevuk"
                verified={true}
                text="Some dummy text."
                image="https://media.giphy.com/media/3xz2BvpyQkY46uKrEQ/giphy.gif"
            />
        
        </div>
    )
}

export default Feed;
