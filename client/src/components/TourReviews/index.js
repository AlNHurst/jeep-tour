import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_REVIEWS } from "../../utils/queries";
import "./style.css";

import { Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TourReviews = () => {
  const { loading, error, data } = useQuery(QUERY_REVIEWS);
  if (loading) return <div>'Loading...';</div>;
  if (error) return `Error! ${error.message}`;

  const reviewList = data?.tourReviews || [];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };


  return (
    <div className="carousel-section">
      <Carousel swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={Carousel.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={5000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        deviceType={Carousel.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px" className="carousel">
        {reviewList.map((review) => {
          return (
            <div className="tourReviews-container">
              <div className="tourReviews-mainbox">
                {/* <div className="tourReviews-imgbox">
                    <img className="top-left" src={review.imageJpg} alt="" />
                  </div> */}
                <div className="tourReviews-info">
                  <h4 className="top-middle">{review.name}</h4>
                  {/* rating */}
                  <p className="body-text">{review.comment}
                    <ul>
                      <li>{review.rating} stars!
                      </li></ul></p>

                </div>
              </div>
            </div>
          );
        }
        )}

      </Carousel>
    </div>
  );
};

export default TourReviews;
