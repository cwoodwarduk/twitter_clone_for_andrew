import React from 'react';
import './Feed.css';
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';

function Feed() {
    return (
        <div className="feed">
            {/* header */}
            <div className="feed__header">
                <h2>Feed</h2>
            </div>
            

            {/* tweet input */}
            <TweetBox />

            {/* post */}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

        </div>
    )
}

export default Feed;
