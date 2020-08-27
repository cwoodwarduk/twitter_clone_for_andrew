import React, { useState, useEffect } from 'react';
import './Feed.css';
import TweetBox from '../TweetBox/TweetBox';
import Post from '../Post/Post';
import db from '../../firebase/firebase';
import FlipMove from 'react-flip-move';

function Feed(isAuth, setUserData) {

    const [posts, setPosts] = useState([]);

    console.log('Is auth: ' + {isAuth});
    // console.log('user id: ' + userId)

    useEffect(() => {
        db.collection('posts').orderBy("postedAt", "desc").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    // const userData = db.collection("userInfo").where("userId", "==", userId).get().then(function(querySnapshot) {
    //     querySnapshot.forEach(function(doc) {
    //         // doc.data() is never undefined for query doc snapshots
    //         console.log(doc)
    //     });
    // });

    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Feed</h2>
            </div>

            <TweetBox isAuth={isAuth} />

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
