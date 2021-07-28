// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';

// import Auth from '../../utils/auth';
// import { Container } from 'react-bootstrap';

// import Login from '../../pages/Login';
// import Signup from '../../pages/Signup';

// import logo from '../../logo.JPG';
// import './style.css';

// const Header = () => {

//   const [showLogin, setShowLogin] = useState(true);
//   const logout = (event) => {
//     event.preventDefault();
//     Auth.logout();
//   };

//   const renderControls = () => {
//     // If logged in show logout controls
//     if (Auth.loggedIn()) {
//       return (
//         <>
//           <div>
//             <Link className="btn btn-sm btn-info m-2" to="/me">
//               {Auth.getProfile().data.username}'s profile
//             </Link>
//             <button className="btn btn-sm btn-light m-2" onClick={logout}>
//               Logout
//             </button>
//           </div>
//         </>
//       );
//     }

//     const renderLoginSignOut = () => {
//       if (showLogin) {
//         return <Login>
//         </Login>
//       }
//       return <Signup>
//       </Signup>
//     };

//     // If logged out show login controls
//     return (
//       <>
//         {renderLoginSignOut()}
//         <p>If you do not have an account, click
//           <Link onClick={() => setShowLogin((prev) => !prev)}> here </Link>to signup</p>
//       </>
//     )
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <Link className="navbar-brand" to="/">Aruba Jeep Tours</Link>
//         {/* <img src={logo} alt="jeep tours logo" style={{ height: 70, padding: '8px' }} /> */}
//         <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
//           <span class="navbar-toggler-icon"></span>
//         </button>

//         <div id="navbarCollapse" class="collapse navbar-collapse justify-content-start">
//           <div class="navbar-nav">
//             <a href="/" class="nav-item nav-link">Home</a>
//             <a href="/" class="nav-item nav-link">About</a>
//             <div class="nav-item dropdown">
//               <a href="/" data-toggle="dropdown" class="nav-item nav-link dropdown-toggle">Contribute</a>
//               <div class="dropdown-menu">
//                 <a href="/" class="dropdown-item">Leave A React</a>
//                 <a href="/" class="dropdown-item">Share Photos</a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="login-card">
//           {renderControls()}
//         </div>
//       </nav>
      
//     </>
//   )
// }

// export default Header
