import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USERS } from '../../utils/queries';
import './style.css';

import { Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TourReviews = () => {
  const { loading, error, data } = useQuery(QUERY_USERS);
  if (loading) return <div>'Loading...';</div>
  if (error) return `Error! ${error.message}`;

  const usersList = data?.users || [];

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
    <Carousel responsive={responsive}>
      <div className="tourReviews-container">
        {usersList.map((user) => {
          return (
            <div className="tourReviews-mainbox">
              <div className="tourReviews-imgbox">
                <img src={user.imageJpg} alt="" />
              </div>
              <div className="tourReviews-info">
                <h4>{user.username}</h4>
                {/* rating */}
                {/* <p>{user.review.comment}</p> */}
              </div>
            </div>
          );
        })}
      </div>
    </Carousel>
  );
};

export default TourReviews;