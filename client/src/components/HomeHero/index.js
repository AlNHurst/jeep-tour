import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import island from '../../aruba-img.jpg';
import './style.css';

import Auth from '../../utils/auth';
import { Card } from 'react-bootstrap';

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
      <div className="jumbotron">
        <div className="container">
          <div className="hero-wrapper">
            <div className="row">
              <div className="col-lg-7 col-xm-12">
                <h2 className="hero-heading">Aruba Jeep Tours</h2>
                <img src={island} alt="aruba island" style={{ height:'375px' }} />
              </div>
              <div className="col-lg-4 col-xm-12">
                <Card>
                  <Card.Body>
                {renderControls()}
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
