 import React, { forwardRef } from 'react';
import { Avatar } from '@material-ui/core';
import './Post.css';

import LikeButton from './LikeButton';
import CommentButton from './CommentButton';
import ShareButton from './ShareButton';

const Post = forwardRef(({ name, description, message, photoUrl, likeCount, commentCount, shareCount }, ref) => {
    return (
        <div ref={ref} className="post">
            <div className="post_header">
                <Avatar src={photoUrl}>
                    {name[0]}
                </Avatar>
                <div className="post_info">
                    <h2>
                        {name}
                    </h2>
                    <p>
                        {description}
                    </p>
                </div>
            </div>

            <div className="post_body">
                <p>
                    {message}
                </p>
            </div>

            <div className="post_buttons">
                <LikeButton />
                <CommentButton />
                <ShareButton />
            </div>
        </div>
    );
})

export default Post;