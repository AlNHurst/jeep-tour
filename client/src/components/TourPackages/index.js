import React from "react";
import './style.css';
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_TOURS } from "../../utils/queries";

import { Card, Button } from 'react-bootstrap';

import tourImage from '../../beach-catus-img.jpg';

const TourPackages = () => {
  const { loading, error, data } = useQuery(QUERY_TOURS);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const tourList = data?.tourPackages || [];

  return (
    <>
      <div className="tourPackages-container">
        <div className="row " style={{ padding: '16px' }}>
          {tourList.map(tour => (
            <>
              <div className="col-lg-4 col-xm-12 px-5">
                <Card style={{ width: '18rem', paddingTop: '16px' }}>
                  <Card.Img style={{ width: '16rem' }} src="http://www.getmdl.io/assets/demos/dog.png" />
                  <Card.Body>
                    <Card.Title>
                      {tour.name}
                    </Card.Title>
                    <Card.Text>
                      Description: {tour.description}
                      <p>{tour._id}</p>
                      <Link to={`/singletour/${tour._id}`}>click here
                    </Link>
                    </Card.Text>
                  </Card.Body>
                    <Link to={`/singletour/${tour._id}`}>
                  <button>View Details and Book
                  </button>
                    </Link>
                </Card>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default TourPackages;
