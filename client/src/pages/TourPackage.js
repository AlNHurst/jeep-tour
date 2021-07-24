import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_TOUR } from '../utils/queries';

const TourPackage = () => {
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
      <h1>Tour Name: {tour.name} </h1>
      <p>{tour.description}</p>
      <ul>
        <li>Adult Price: ${tour.adultPrice}</li>
        <li>Child Price: ${tour.childPrice}</li>
        <li>Duration: {tour.duration} hours</li>
        <li>Departure Time: {tour.departureTime}</li>
      </ul>
    </>
  );
};

export default TourPackage;