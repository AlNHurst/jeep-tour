import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_TOURS } from "../../utils/queries";

const TourPackages = () => {
  const { loading, error, data } = useQuery(QUERY_TOURS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const tourList = data?.tourPackages || [];

  return (
    <>
      {tourList.map(tour => (
        <>
          <div className="card">
            <div className="card-header has-background-white">
              <div className="card-header-title is-centered">
                <strong>{tour.name}</strong>
              </div>
            </div>
            <div className="card-image">
              <figure className="image is-128x128">
                <img src="http://www.getmdl.io/assets/demos/dog.png" alt="Tour Package" />
              </figure>
            </div>
            <div className="card-content">
              <p>{tour.description}</p>
            </div>
            <div className="card-footer">
              <button colored>View Updates
                <Link to={`/tourpackage/${tour._id}`}>
                  show more...
                </Link>
              </button>
            </div>
          </div>
        </>
      )
      )};
    </>
  );
};

export default TourPackages;
