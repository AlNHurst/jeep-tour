import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const NavigationBar = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  const renderControls = () => {
    // If logged in show logout controls
    if (Auth.loggedIn()) {
      return (
        <>
          <Link className="btn btn-lg btn-info m-2" to="/me">
            {Auth.getProfile().data.username}'s profile
          </Link>
          <button className="btn btn-lg btn-light m-2" onClick={logout}>
            Logout
          </button>
        </>
      );
    }}

  return (
    <div className="navbar-container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a href="/" className="navbar-brand">Aruba <b> Jeep Tours</b></a>
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="/navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
          <div className="navbar-nav">
            <a href="/" className="nav-item nav-link">Home</a>
            <a href="/" className="nav-item nav-link">About</a>
            <div className="nav-item dropdown">
              <a href="/" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle">Contribute</a>
              <div className="dropdown-menu">
                <a href="/" className="dropdown-item">Leave A Review</a>
                <a href="/" className="dropdown-item">Share Photos</a>
              </div>
            </div>
          </div>

          <div className="navbar-nav action-buttons navbar-right">
            <button onClick={() => renderControls()} data-toggle="dropdown" className="btn btn-primary nav-item nav-link dropdown-toggle">Login</button>
            <div className="dropdown-menu login-form">
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" required="required" />
                </div>
                <div className="form-group">
                  <div className="clearfix">
                    <label>Password</label>
                    <a href="/" className="float-right text-muted"><small>Forgot?</small></a>
                  </div>
                  <input type="password" className="form-control" required="required" />
                </div>
                <input type="submit" className="btn btn-primary btn-block" value="Login" />
              </form>
            </div>
          </div>
          <div className="navbar-nav action-buttons">
            <button href="/" data-toggle="dropdown" className="btn btn-primary nav-item nav-link dropdown-toggle mr-3">Sign Up</button>
            <div className="dropdown-menu login-form">
              <form>
                <div className="form-group">
                  <label>Username</label>
                  <input type="text" className="form-control" required="required" />
                </div>
                <div className="form-group">
                  <div className="clearfix">
                    <label>Password</label>
                    <a href="/" className="float-right text-muted"><small>Forgot?</small></a>
                  </div>
                  <input type="password" className="form-control" required="required" />
                </div>
                <input type="submit" className="btn btn-primary btn-block" value="Login" />
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div >
  )
}
export default NavigationBar;
