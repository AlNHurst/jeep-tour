import React from 'react';
import { Container } from 'react-bootstrap';
import HomeHero from '../components/HomeHero';
import ReviewForm from '../components/ReviewForm';

// Components
// import ProductList from '../components/ProductList';
import TourPackages from '../components/TourPackages';
import TourReviews from '../components/TourReviews';

const Home = () => {
  return (
    <main>
      <HomeHero/>
        <TourPackages />
        <TourReviews />
        <ReviewForm />
    </main>
  );
};

export default Home;
