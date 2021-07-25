import React from 'react';
import './style.css';
import logo from '../../logo.JPG'

const NavBar = () => {
  return (
    <nav className="navbar">
     <img src={logo} alt="jeep tours logo" />
     <ul style={{display:'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', listStyleType: 'none', textAlign: 'center', textDecoration: 'none'}}>
       <li>
        <a className="nav-link" href="/">Home</a>
       </li>
       <li>
        <a className="nav-link" href="/">About</a>
       </li>
       <li>
        <a className="nav-link" href="/">Leave A Review</a>
       </li>
       <li>
        <a className="nav-link" href="/">Cart</a>
       </li>
     </ul>
    </nav>
  )
};

export default NavBar;
