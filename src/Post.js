 import React, { forwardRef, useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import './Post.css';
import LikeButton from './postComponents/LikeButton';
import CommentButton from './postComponents/CommentButton';
import ShareButton from './postComponents/ShareButton';
import CommentBox from './postComponents/CommentBox';
import { setPost, selectPost } from './features/postSlice';
import { useDispatch, useSelector } from 'react-redux';
import { db, increment } from './firebase';

const Post = forwardRef(({ id, name, description, message, photoUrl, likeCount, commentCount, shareCount }, ref) => {
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [viewComments, setViewComments] = useState(false);
    const dispatch = useDispatch();
    const post = useSelector(selectPost);
    const [comments, setComments] = useState([])

    const likeClick = (e) => {
        e.preventDefault();
        db.collection('posts').doc(id).update({
            likeCount: increment,
        });
    }

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

    const viewCommentsClick = (e) => {
        e.preventDefault();
        setViewComments(!viewComments);
    }

    useEffect(() => {
        db.collection("posts").doc(id).collection("comments").orderBy('timestamp').onSnapshot(snapshot => (
            setComments(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data(),
                }
            )))
        ))
    }, [id]);

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
                <div onClick={likeClick}>
                <LikeButton />
                </div>
                <div onClick={commentClick}>
                <CommentButton/>
                </div>
                <ShareButton />
            </div>
            <div className="post__stats">
                <p
                    className={likeCount ? "" : "hidden"}
                >
                    {likeCount} Likes
                </p>
                <p 
                    onClick={viewCommentsClick}
                    className={commentCount ? "post__viewComments" : "hidden"}
                >
                    {commentCount} {commentCount === 1 ? 'Comment' : 'Comments'}
                </p>
            </div>

            <div className={showCommentBox ? "post__commentAdd" : 'hidden'}>
                {post?.postref ? <CommentBox /> : "" }
            </div>

            <div className={viewComments ? "post__commentDisplay" : "hidden"}>
                {comments.map(({ id, data:{ comment, commentName, commentPhotoUrl } }) => (
                    <div key={id} className="comment">
                        <div className="comment__header">
                            <Avatar src={commentPhotoUrl}>
                                {commentName[0]}
                            </Avatar>
                            <div className="comment__info">
                                <h3>
                                    {commentName}
                                </h3>
                            </div>
                        </div>
                        <div className="comment__body">
                            <p>
                                {comment}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
})

export default Post;