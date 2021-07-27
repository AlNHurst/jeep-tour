import React from 'react';
import ReviewForm from '../components/ReviewForm';

// Components
// import ProductList from '../components/ProductList';
import TourPackages from '../components/TourPackages';
import TourReviews from '../components/TourReviews';

const Home = () => {
  return (
    <main>
        <TourPackages />
        <TourReviews />
        <ReviewForm />
    </main>
  );
};

export default Home;
