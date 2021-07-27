import React from 'react';

import island from '../../aruba-img.jpg';
import './style.css';

const HomeHero = () => {
  return (
    <>
      <div className="jumbotron">
        <div className="container">
          <div className="hero-wrapper">
            <div className="row">
              <div className="col-lg-7 col-xm-12">
                <img src={island} alt="aruba island" style={{ height: '375px' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeHero;
