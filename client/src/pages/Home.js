// Node Modules
import React from 'react';
import Reviews from '../components/Reviews';
// Utilities
// Components
import TourPackages from '../components/TourPackages';

const Home = () => {
  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <TourPackages>
          </TourPackages>
        </div>
        <div>
        <Reviews>   
        </Reviews>
        </div>
      </div>
    </main>
  );
};

export default Home;
