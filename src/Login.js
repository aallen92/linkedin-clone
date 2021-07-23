import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Login.css';
import { login } from './features/userSlice';
import { auth } from './firebase';


function Login() {


    const [signUp, setSignUp] = useState(false);
    const toggleSignUp = React.useCallback(() => setSignUp(!signUp));

    const [signIn, setSignIn] = useState(false);
    const toggleSignIn = React.useCallback(() => setSignIn(!signIn));

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, SetName] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();
       
    const loginToApp = (e) => {
        e.preventDefault()
        
        auth.signInWithEmailAndPassword(email, password).then(
            (userAuth) => {
                dispatch(
                  login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.profilePic,
                })
            );
        })
        .catch(error => alert(error));
    };

    const register = () => {
        if (!name) {
            return alert("Please enter a full name!");
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic,
            })
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid,
                        displayName: name, 
                        photoUrl: profilePic,
                    })
                );
            });
        })
        .catch((error) => alert(error.message));
        console.log(name)
    };


    return (
        <div>
            <div className='header'>
                    <div className="header__left">
                        Linked
                        <LinkedInIcon />
                    </div>

                    <div className="header__right">
                        <button 
                            className="button__joinNow" 
                            type="button"
                            onClick={toggleSignUp}>
                            Join Now
                        </button>
                        <button 
                            className="button__signIn" 
                            type="button"
                            onClick={toggleSignIn}>
                            Sign In
                        </button>
                    </div>
            </div>
            <form className={ signIn ? "signin__form" : "hidden"}>
                <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
                type="email" 
                />

                <input 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                type="password" 
                />

                <button type="submit" onClick={loginToApp}>
                    Sign In
                </button>

            </form>

            <form className={ signUp ? "signup__form" : "hidden"}>
                <input 
                value={name}
                onChange={(e) => SetName(e.target.value)}
                placeholder="full name (required if registering)" 
                type="text"
                />

                <input 
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
                placeholder="Profile pic URL (optional)" 
                type="text" 
                />

                <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email" 
                type="email" 
                />

                <input 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password" 
                type="password" 
                />

                <button type="submit" onClick={register}>
                    Register
                </button>

            </form>
        <div className={ signIn || signUp ? "login" : "login"}> 
            <div className='login__left'>
                <div 
                className="splash__display"
                >
                    <h1>
                        Welcome to your professional community
                    </h1>

                </div>
            </div>

            <div className="login__right"> 
            <img src="https://static-exp1.licdn.com/sc/h/dxf91zhqd2z6b0bwg85ktm5s4" alt="" />
            </div>
        </div>
    </div>
    )
}

export default Login
