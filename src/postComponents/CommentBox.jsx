import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearPost, selectPost } from '../features/postSlice';
import './CommentBox.css';

function CommentBox() {
    const dispatch = useDispatch();
    const postID = useSelector(selectPost);
    const [comment, setComment] = useState("");

    const postClick = (e) => {
        e.preventDefault();
        console.log(postID);
        console.log(comment);
        dispatch(clearPost());
    }

    return (
        <div className="comment__box">
            <form>
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
