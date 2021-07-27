import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearPost, selectPost } from '../features/postSlice';
import './CommentBox.css';

function CommentBox() {
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();
    const post = useSelector(selectPost);

    const postClick = (e) => {
        e.preventDefault();
        console.log(post.postref);
        console.log(comment);
        dispatch(clearPost());
    }

    return (
        <div className="comment__box">
            <form>
            <p>
                {post?.postref}
            </p>
            <textarea 
                value={comment} 
                placeholder="Add comment..." 
                onChange={(e) => setComment(e.target.value)} 
            />
            <button onClick={postClick}>Post</button>
            </form>
        </div>
    )
}

export default CommentBox
