import React, { useState } from 'react';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import './Button.css';

function CommentButton() {

    const [count, setCount] = useState(0);

    const addComment = () => {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div className="Button" onClick={addComment}>
            <ChatOutlinedIcon />
            <h5 className='Button_title'>Comment</h5>
            {count? <p className='Count'>{count} Comments</p>: "" }

        </div>
    )
}

export default CommentButton
