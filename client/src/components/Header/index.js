import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import { Container } from 'react-bootstrap';

import Login from '../../pages/Login';
import Signup from '../../pages/Signup';

import logo from '../../logo.JPG';
import './style.css';

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
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Container>
          <img src={logo} alt="jeep tours logo" style={{ height: 70, padding: '8px' }} />
          <a className="navbar-brand" href="/">Aruba Jeep Tours</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                Home
              </li>
              <li className="nav-item">
                About
              </li>
              <li className="nav-item">
                Leave A Review
              </li>
            </ul>
          </div>
          <div> 
            {renderControls()}</div>
        </Container>
      </nav>
      <div className="header-container">
        <div className="login">

        </div>
      </div>
    </>
  )
}

export default Header
