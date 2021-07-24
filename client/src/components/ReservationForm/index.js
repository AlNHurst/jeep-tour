import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';


const ReservationForm = () => {
  // calendar component function within modal 
  const [selectionDate, setSelectionDate] = useState(new Date());
  const dateChange = selectionDate => {
    setSelectionDate(selectionDate);
  }

  return (
    <>
        <form className="box">
                <div className="field">
                  <label
                    className="label">Email <span className="icon is-small">
                      <i className="fa fa-envelope">
                      </i>
                    </span></label>
                  <div className="control">
                    <input type="email" placeholder="email@email.com" className="input" name="email" />
                  </div>
                </div>

                <div className="field">
                  <label
                    className="label">Password <span className="icon is-small">
                      <i className="fa fa-lock">
                      </i>
                    </span></label>
                  <div className="control">
                    <input type="password" placeholder="******" className="input" name="password" />
                  </div>
                </div>
                
                <div className="field">
                  <button
                    className="button is-dark"
                    type="submit">
                    Submit
                  </button>
                </div>
              </form>
        <Calendar
          activeStartDate={selectionDate}
          onChange={dateChange}
          value={selectionDate}
        >
        </Calendar>
    </>
  )
};

export default ReservationForm;