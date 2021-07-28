import React from 'react';

import island from '../../aruba-island-yellow.png';
import './style.css';

const HomeHero = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="hero-wrapper">
            <img src={island} alt="Aruba Island" usemap="#island" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
