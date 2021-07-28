import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

import island from '../../aruba-island-yellow.png';
import './style.css';

import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import Cart from '../Cart';
import Jumbotron from '../Jumbotron';

const HomeHero = () => {
  const [showLogin, setShowLogin] = useState(true);
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const renderControls = () => {
    // If logged in show logout controls
    if (Auth.loggedIn()) {
      return (
        <>
          <div>
            <Link className="btn btn-sm btn-info m-2" to="/me">
              {Auth.getProfile().data.username}'s profile
            </Link>
            <button className="btn btn-sm btn-light m-2" onClick={logout}>
              Logout
            </button>
          </div>
        </>
      );
    }

    const renderLoginSignOut = () => {
      if (showLogin) {
        return <Login>
        </Login>
      }
      return <Signup>
      </Signup>
    };

    // If logged out show login controls
    return (
      <>
        {renderLoginSignOut()}
        <p>If you do not have an account, click
          <Link onClick={() => setShowLogin((prev) => !prev)}> here </Link>to signup</p>
      </>
    )
  };

  return (

    <Jumbotron>

      
      <div className="col-md-6">{renderControls()}</div>
    </Jumbotron>
  );
};

export default HomeHero;
