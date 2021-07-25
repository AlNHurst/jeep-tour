import React from "react";
import './style.css';
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
          <article>
            <div className="img-container">
              <img width="200" src="http://www.getmdl.io/assets/demos/dog.png" alt="Tour Package" />
            </div>
          </article>
          <div className="tourPackage-info">
            <h4><strong>{tour.name}</strong></h4>
            <h5>{tour.description}<span><i className="fas fa-caret-squar-down" /></span></h5>
            <p>more description {tour.moreDescription}</p>
          </div>

          <div className="card-footer">
            <button colored>View Updates
              <Link to={`/tourpackage/${tour._id}`}>
                show more...
              </Link>
            </button>
          </div>
        </>
      ))}
    </>
  )}

      export default TourPackages;
