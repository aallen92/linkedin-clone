import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import HeaderOption from './HeaderOption.js';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Header.css'
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

function Header() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
    };
    return (
        <div className='header'>
            <div className="header__left">
                <LinkedInIcon />
                <div className="header__search">
                    <SearchIcon />
                    <input placeholder="Search for jobs, people, posts..." type="text"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption 
                    avatar={true}
                    title={user.displayName}
                    onClick={logoutOfApp}
                />
            </div>
        </div>
    );
}

export default Header;