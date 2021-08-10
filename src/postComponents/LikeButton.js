import React from 'react';
import './Button.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


function LikeButton() {

 

    return (
        <div className="Button">
        <ThumbUpIcon />
            <h5 className='Button_title'>Like</h5>
        </div>
    )
}

export default LikeButton
