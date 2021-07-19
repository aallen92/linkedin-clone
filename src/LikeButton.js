import React, {useState} from 'react';
import './Button.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { lightBlue } from '@material-ui/core/colors';
import { db } from './firebase';
import firebase from 'firebase';

function LikeButton() {
    const [count, setCount] = useState(0);
    const [isLiked, setLikeStatus] = useState(false);

    const addLike = () => {
        setCount(prevCount => prevCount + 1);
        setLikeStatus(true);
        var likeDB = db.collection("posts").doc();

        return likeDB.update({
            likes: firebase.firestore.FieldValue.increment(1)
        });
        
    }

    return (
        <div className="Button" onClick={addLike}>
            { isLiked=== true ? <ThumbUpIcon style={{color:lightBlue[800]}}/>:<ThumbUpIcon />}
            <h5 className='Button_title'>Like</h5>
            {count? <p className='Count'>{count} Likes</p>: "" }

        </div>
    )
}

export default LikeButton
