 import React, { forwardRef, useState } from 'react';
import { Avatar } from '@material-ui/core';
import './Post.css';
import LikeButton from './postComponents/LikeButton';
import CommentButton from './postComponents/CommentButton';
import ShareButton from './postComponents/ShareButton';
import CommentBox from './postComponents/CommentBox';
import { setPost, selectPost } from './features/postSlice';
import { useDispatch, useSelector } from 'react-redux';

const Post = forwardRef(({ id, name, description, message, photoUrl, likeCount, commentCount, shareCount }, ref) => {
    const [showCommentBox, setShowCommentBox] = useState(false);
    const dispatch = useDispatch();
    const post = useSelector(selectPost);

    const commentClick = (e) => {
        e.preventDefault();
        setShowCommentBox(!showCommentBox);
        dispatch(
            setPost({
                postref: id,
            })
        );
        console.log(post)
    }
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
                    <p>
                        {id}
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
                <div onClick={commentClick}>
                <CommentButton/>
                </div>
                <ShareButton />
            </div>

            <div className="post__comments">
                {showCommentBox ? <CommentBox /> : "" }
            </div>
        </div>
    );
})

export default Post;