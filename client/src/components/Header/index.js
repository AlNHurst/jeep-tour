import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';

import Auth from '../../utils/auth';
import NavBar from '../NavBar/NavBar';


const Header = () => {
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
            <Link className="btn btn-lg btn-info m-2" to="/me">
              {Auth.getProfile().data.username}'s profile
            </Link>
            <button className="btn btn-lg btn-light m-2" onClick={logout}>
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
    <>
      <section>
        <div className="container">
          {/* NavBar component */}
          <NavBar></NavBar>
        </div>
      </section>

      <section className="hero is-primary">
        <div className="hero-body">
          <div>
            <h1 className="title">
              Tour the Aruba Island
            </h1>
            <img src="https://res.cloudinary.com/dije62fvf/image/upload/v1626977579/Aruba/aruba-img_hoxtet.jpg" alt="Aruba island" />
          </div>
          <div>
            {renderControls()}
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
