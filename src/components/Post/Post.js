import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

function Post({
    avatar,
    displayName,
    username,
    verified,
    timestamp,
    text,
    image
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://avatars2.githubusercontent.com/u/54438992?s=400&u=1851015ae1e0dc7269acf7ac41194e6ab8fb0672&v=4"></Avatar>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Calum {" "}
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge"/>
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>Some dummy text.</p>
                    </div>
                    <img src="https://media.giphy.com/media/3xz2BvpyQkY46uKrEQ/giphy.gif" alt="" />
                    <div className="post__footer">
                        <ChatBubbleOutlineIcon fontSize="small" />
                        <RepeatIcon fontSize="small" />
                        <FavoriteBorderIcon fontSize="small" />
                        <PublishIcon fontSize="small" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;
