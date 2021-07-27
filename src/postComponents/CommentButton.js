import React from 'react';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import './Button.css';

function CommentButton() {

    return (
        <div className="Button">
            <ChatOutlinedIcon />
            <h5 className='Button_title'>Comment</h5>
        </div>
    )
}

export default CommentButton
