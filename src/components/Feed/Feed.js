import React, { useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';
import db from '../../firebase/firebase';
import FlipMove from 'react-flip-move';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts').orderBy("postedAt", "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Feed</h2>
            </div>

            <TweetBox />

            <FlipMove>
                {posts.map(post => (
                    <Post
                        key={post.id} 
                        avatar={post.avatar}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        postedAt={new Date(post.postedAt.seconds * 1000).toTimeString()}
                        text={post.text}
                        image={post.image}
                    />
                ))}
            </FlipMove>
            
        </div>
    )
}

export default Feed;
