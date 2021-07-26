import React from 'react';

import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_TOUR } from '../utils/queries';
import ProductList from '../components/ProductList';

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
    <div className="jumbotron" style={{ backgroundImage: `url${tour.url}` }}>
        <div className="container">
        <h1>{tour.name} </h1>          
        </div>
      </div>
      <div className="singletour-container">
        <h3>{tour.name}</h3>
        <p>{tour.description}</p>
        <ul>
          <li>Departure Time: {tour.departureTimes}</li>
          <li>Duration: {tour.duration} hours</li>
          <li>Adult Price: ${tour.adultPrice}</li>
          <li>Child Price: ${tour.childPrice}</li>
        </ul>
        <button>
          <ProductList />
          Make Reservation
        </button>
      </div>
    </>
  );
};

export default SingleTour;
