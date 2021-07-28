import React from 'react';
import ReviewForm from '../components/ReviewForm';
import { Container } from 'react-bootstrap';

// Components
// import ProductList from '../components/ProductList';
import TourPackages from '../components/TourPackages';
import TourReviews from '../components/TourReviews';

const Home = () => {
  return (
    <main>
      <Container style={{ padding: '24px', margin: 'auto'}}><div><TourPackages /></div></Container>
      <Container style={{ padding: '24px', margin: 'auto'}}><div><TourReviews /></div></Container>
      <Container style={{ padding: '24px', margin: 'auto'}}><div><ReviewForm /></div></Container>
    </main>
  );
};

export default Home;
