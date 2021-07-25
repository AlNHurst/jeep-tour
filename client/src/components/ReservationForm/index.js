import React, { useState } from 'react';
// import Calendar from 'react-calendar';
import Payment from '../Payment'
// import TourPackages from '../TourPackages'
import { Modal } from 'react-bootstrap';
// import 'react-calendar/dist/Calendar.css';
import './style.css';


const ReservationForm = () => {
  // // calendar component function within modal 
  // const [selectionDate, setSelectionDate] = useState(new Date());
  // const dateChange = selectionDate => {
  //   setSelectionDate(selectionDate);
  // }

  // // Modal functions to open and close
  // const [modalIsOpen, setIsOpen] = useState(false);
  // const openModal = () => {
  //   return setIsOpen(true);
  // }
  // const closeModal = () => {
  //   return setIsOpen(false);
  // }
  // const onRequestClose = () => {
  //   return setIsOpen(false);
  // }

  return (
    <>
      {/* Reservation Modal */}
      <div>
        <div>
          {/* <button onClick={closeModal}>
            &larr; Go Back to Reservation Details
          </button> */}
          <div>
            <div className="card">
              <div className="card-body">
                <h1>You're booking test</h1>

                <h4>Contact Information</h4>
                <div>
                  <form className="form-grid" action="">
                    <div className="contact-grid">
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
                        <div className="control">
                          <input type="date" placeholder="Date" className="input" name="date" required />
                        </div>
                      </div>
                    </div>
                    <div className="payment-grid">
                      <div className="field">
                        <Payment></Payment>
                      </div>
                    </div>

                    <button
                      className="button is-dark"
                      type="submit">
                      Complete and Pay
                    </button>
                  </form>
                </div>
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
      </div>
    </>
  )
};

export default ReservationForm;