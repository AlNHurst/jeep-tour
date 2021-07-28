import React, { useState } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';

const NavigationBar = () => {
  return (
    <div className="navbar-container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a href="/" className="navbar-brand">Aruba <b> Jeep Tours</b></a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="/navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
          <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">Home</Link>
            <Link to="/about" className="nav-item nav-link">About</Link>
            <div className="nav-item dropdown">
              <a href="/" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle">Contribute</a>
              <div className="dropdown-menu">
                <Link to="/" className="dropdown-item">Leave A Review</Link>
                <Link to="/" className="dropdown-item">Share Photos</Link>
              </div>
            </div>
            {Auth.loggedIn() &&
              <Link className="nav-item nav-link" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
            }
          </div>
        </div>
      </nav>
    </div >
  )
}
export default NavigationBar;
