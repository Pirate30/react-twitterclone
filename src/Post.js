import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import './Post.css';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';


const Post = forwardRef(({
    displayName,
    userName,
    verified,
    text,
    img,
    avatar
}, ref) => {
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__Body">
                {/* header section */}
                <div className="post__header">
                    <h3 className="post__headerheader">
                        {displayName}<span className="post__username">
                            {
                                verified && <VerifiedUserIcon className="post__badge" fontSize="small" />
                            }@{userName}</span>
                    </h3>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                {/* post image section */}
                <img src={img} />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>

            </div>
        </div>
    )
});

export default Post;
