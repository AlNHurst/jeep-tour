import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_REVIEWS } from '../../utils/queries';
import './style.css';

import { Card } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TourReviews = () => {
  const { loading, error, data } = useQuery(QUERY_REVIEWS);
  if (loading) return <div>'Loading...';</div>
  if (error) return `Error! ${error.message}`;

  const reviewsList = data?.tourReviews || [];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <div className="review-wrapper">
        <Carousel responsive={responsive}>
          {reviewsList.map((review) => {
            return (
            
                <Card style={{}}>
                  <Card.Body>
                    <p>{review.comment}</p>
                  </Card.Body>
                  <Card.Footer>

                    <p style={{ color: 'black' }}>Contributor: {review.comment}</p>

                  </Card.Footer>
                </Card>
              );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default TourReviews;