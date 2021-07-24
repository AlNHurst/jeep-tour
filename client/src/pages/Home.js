// Node Modules
import React from 'react';
// Utilities
// Components
import TourPackages from '../components/TourPackages';
import TourReviews from '../components/TourReviews';

const Home = () => {
  return (
    <main>
      <div>
        <section>
          <TourPackages>
          </TourPackages>
        </section>
        <div>
        <TourReviews></TourReviews>
        </div>
      </div>
    </main>
  );
};

export default Home;
