import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';

import Auth from '../../utils/auth';


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
          <Link className="btn btn-lg btn-info m-2" to="/me">
            {Auth.getProfile().data.username}'s profile
          </Link>
          <button className="btn btn-lg btn-light m-2" onClick={logout}>
            Logout
          </button>
        </>
      );
    }

    const renderLoginSignOut = () => {
      if(showLogin) {
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
      
      <Link onClick={() => setShowLogin((prev) => !prev)}>SignUp</Link>
      
        {/* <Link className="btn btn-lg btn-info m-2" to="/login">
          Login
        </Link>
        <Link className="btn btn-lg btn-light m-2" to="/signup">
          Signup
        </Link> */}
      </>
    )
  };

  return (
    <header className="bg-dark text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <h1>
            Tour the Aruba Island
          </h1>
          <Link className="text-light" to="/">
            <img src="https://res.cloudinary.com/dije62fvf/image/upload/v1626977579/Aruba/aruba-img_hoxtet.jpg" alt="Aruba island" />
          </Link>
        </div>
        <div>
          {renderControls()}
        </div>
      </div>
    </header>
  );
};

export default Header;
