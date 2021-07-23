import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Sidebar () {
    /*used to get user info out of Redux store */
    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
                <span className="sidebar_hash">
                    #
                </span>
                <p>{topic}</p>
        </div>
    );

    return (
        <div className="sidebar">
            <div className="sidebar_top">
                <img src="https://images.unsplash.com/photo-1625625003675-335a3202d20a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80" alt="" />
                <Avatar src={user.photoUrl} className="sidebar_avatar">
                    {user.email[0]}
                </Avatar>
                <h2>
                    {user.displayName}
                </h2>
                <h4>
                    {user.email}
                </h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>
                        Who viewed you
                    </p>
                    <p className="sidebar_statNumber">
                        2,543
                    </p>
                </div>
                <div className="sidebar_stat">
                    <p>
                        Views on post
                    </p>
                    <p className="sidebar_statNumber">
                        2,448
                    </p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('softwareengineering')}
                {recentItem('design')}
                {recentItem('developer')}
            </div>
        </div>
    );
}

export default Sidebar