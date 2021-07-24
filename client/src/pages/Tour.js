// Node Modules
import React from 'react';
import Reviews from '../components/Reviews';
// Utilities
// Components
import TourPackages from '../components/TourPackages';
import { useParams } from 'react-router-dom';
import {useQuery } from '@apollo/client';
import { QUERY_REVIEWS } from '../utils/queries'

const Tour = () => {
    const { tourId } = useParams();
    
    const {  data } = useQuery(QUERY_REVIEWS, {
        // pass URL parameter
        variables: { tour_id: tourId },
    });
    const reviewList = data?.tourReviews || [];

  return (

    <main>
      <h1>New Page</h1>
        
        {reviewList.map((review) => {
            return <h1>{review.comment}</h1>
        })}
      <div className="flex-row justify-center">
       
        <div>
        <Reviews>   
        </Reviews>
        </div>
      </div>
    </main>
  );
};

export default Tour;