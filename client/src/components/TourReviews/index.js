import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_REVIEWS } from '../../utils/queries';

const TourReviews = () => {
  const { loading, error, data } = useQuery(QUERY_REVIEWS);
  if (loading) return <div>'Loading...';</div>
  if (error) return `Error! ${error.message}`;

  const reviewsList = data?.tourReviews || [];

  return (
    <>
      {
        reviewsList.map((review) => (
          <>
            <div className="card">
              <div className="card-content">
                <h1>Review Id: {review.comment}</h1>
              </div>
            </div>
          </>
        ))
      }
    </>
  );
};

export default TourReviews;