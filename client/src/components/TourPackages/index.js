import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_TOURS } from "../../utils/queries";

import { Card } from 'react-bootstrap';

const TourPackages = () => {
  const { loading, error, data } = useQuery(QUERY_TOURS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const tourList = data?.tourPackages || [];


  return (
    <>
      <div>
        <div className="tourPackages-container">
          {tourList.map(tour => (
            <>
              <div className="tourPackages-mainbox">
                <div className="tourPackages-imgbox">
                  <img src={tour.url} alt="" />
                  <h1 className="top-center">{tour.name}</h1>
                </div>
                <div className="tourPackages-details">
                  <h4>Details</h4>
                  <div className="tourPackages-info">
                    <h4>{tour.name}</h4>
                    <p>{tour.shortDescription}</p>
                    <ul>
                      <li>{tour.destinations[0]} | {tour.destinations[1]} | {tour.destinations[2]}</li>
                      <li>Adult $ {tour.adultPrice}</li>
                      <li>Child $ {tour.childPrice}</li>
                    </ul>
                    <Link to={`/singletour/${tour._id}`}><button className="myButton">Book Now!</button></Link>

                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default TourPackages;
