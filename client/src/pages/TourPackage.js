import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Payment from '../components/Payment';
import ProductItem from '../components/ProductItem';

// import Calendar from 'react-calendar';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_TOUR } from '../utils/queries';

const TourPackage = () => {
  // query tour by id and show details on page
  const { tourId } = useParams();
  const { loading, data } = useQuery(QUERY_TOUR, {
    variables: { id: tourId },
  });
  const tour = data?.tourPackage || {};

  // Modal functions to open and close
  const [modalIsOpen, setIsOpen] = useState(false);
  const openModal = () => {
    return setIsOpen(true);
  }
  const closeModal = () => {
    return setIsOpen(false);
  }
  const onRequestClose = () => {
    return setIsOpen(false);
  }

  // calendar component function within modal 
  // const [selectionDate, setSelectionDate] = useState(new Date());
  // const dateChange = selectionDate => {
  //   setSelectionDate(selectionDate);
  // }

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div>
        <h1>Tour Name: {tour.name} </h1>
        <p>{tour.description}</p>
        <ul>
          <li>Adult Price: ${tour.adultPrice}</li>
          <li>Child Price: ${tour.childPrice}</li>
          <li>Duration: {tour.duration} hours</li>
          <li>Departure Time: {tour.departureTime}</li>
        </ul>
        <button onClick={openModal}>
          Make Reservation
        </button>
      </div>
      <ProductItem></ProductItem>

      {/* Reservation Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={onRequestClose}>
        <div className="modal-body">
          <button onClick={closeModal}>
            &larr; Go Back to Reservation Details
          </button>
          <div>
            <div className="card">
              <div className="card-body">
                <h1>You're booking {tour.name}</h1>
                <h4>Contact Information</h4>
                <form action="">

                  <div className="field">
                    <div className="control">
                      <input type="text" placeholder="Full name" className="input" name="name" required />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input type="text" placeholder="Phone number" className="input" name="phone" required />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input type="text" placeholder="Email address" className="input" name="email" required />
                    </div>
                  </div>
                  <div className="field">
                    <button
                      className="button is-dark"
                      type="submit">
                      Complete and Pay
                    </button>
                  </div>
                </form>
                <Payment></Payment>
              </div>
            </div>
          </div>

          {/* <Calendar
            activeStartDate={selectionDate}
            onChange={dateChange}
            value={selectionDate}
          >
          </Calendar> */}
        </div>
      </Modal>
    </>
  );
};

export default TourPackage;