import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Card, CardText, CardTitle, CardActions } from "react-mdl";
import { QUERY_REVIEWS } from "../../utils/queries";
import { useParams } from 'react-router-dom';

const Reviews = () => {


    const { tourId } = useParams();
    
    const {  data } = useQuery(QUERY_REVIEWS, {
        // pass URL parameter
        variables: { tour_id: tourId },
    });
    const reviewList = data?.tourReviews || [];
  

  return (
    <>
    
      {reviewList.map((review) => {
        return (
            <div> 
                <h1>Review Id: {review.comment}</h1>

                </div>
          
        );
      })}
    </>
    );
};

export default Reviews;