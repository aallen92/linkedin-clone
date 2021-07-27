import React, { useState } from 'react';
import './Button.css';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

function ShareButton() {
    const [count, setCount] = useState(0);

    const addShare = () => {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <div className="Button" onClick={addShare}>
            <ShareOutlinedIcon />
            <h5 className='Button_title'>Share</h5>
            {count? <p className='Count'>{count} Shares</p>: "" }

        </div>
    )
}

export default ShareButton
