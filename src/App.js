import React, {useEffect} from 'react';
import './App.css';
import Header from "./Header.js";
import Login from './Login';
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";
import Widgets from "./Widgets";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import {auth} from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        //user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        }))
      } else {
        //user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    !user ? (
        <div>
        <Login /> 
        </div>
    ) : (
        <div className="app">
            <Header />
              <div className="app_body">
                <Sidebar />
                <Feed />
                <Widgets />
              </div>
        </div>
    )
  )
};

export default App;
