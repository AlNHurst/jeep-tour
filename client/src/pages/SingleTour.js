import React from 'react';
import { Card } from 'react-bootstrap';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_TOUR } from '../utils/queries';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import ReservationForm from '../components/ReservationForm';

const SingleTour = () => {
  // query tour by id and show details on page
  const { tourId } = useParams();

  const { loading, data } = useQuery(QUERY_TOUR, {
    variables: { id: tourId },
  });
  const tour = data?.tourPackage || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Jumbotron Section */}
      <div className="jumbotron" style={{
        // backgroundImage: `url(${tour.url})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <div className="container">
          <div className="hero-wrapper">
            <div className="row">
              <div className="col-lg-7 col-xm-12">
                <h2 className="hero-heading">{tour.name}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 col-xm-12">
        <Card>
          <Card.Body>
            <ProductList />
          </Card.Body>
        </Card>
      </div>

      <div className="singletour-container">
        <p>{tour.longDescription}</p>
        <h3>{tour.name}</h3>
        <ul>
          <li>Departure Times: {tour.departureTimes[0]} & {tour.departureTimes[1]}</li>
          <li>Duration: {tour.duration} hours</li>
          <li>Destinations: {tour.destinations[0]}, {tour.destinations[1]} & {tour.destinations[2]} </li>
          <li>Adult Price: ${tour.adultPrice}</li>
          <li>Child Price: ${tour.childPrice}</li>
        </ul>
        <ReservationForm />
        {/* <button>
          Schedule Reservation
        </button> */}
      </div>
      <div>
        <Cart />
      </div>
    </>
  );
};

export default SingleTour;
