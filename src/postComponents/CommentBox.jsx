import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearPost, selectPost } from '../features/postSlice';
import { selectUser } from '../features/userSlice';
import './CommentBox.css';
import { db, increment } from '../firebase';
import firebase from 'firebase';

function CommentBox() {
    const [comment, setComment] = useState("");
    const dispatch = useDispatch();
    const post = useSelector(selectPost);
    const user = useSelector(selectUser);

    const postClick = (e) => {
        e.preventDefault();

        db.collection('posts').doc(post.postref).update({
            commentCount: increment,
        });

        db.collection('posts').doc(post.postref).collection('comments').add({
            commentName: user.displayName ? user.displayName : 'Anon',
            photoUrl: user.photoUrl || "",
            comment: comment,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setComment("");
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
