import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../../utils/mutations';
import { Form } from 'react-bootstrap';
import Cart from '../Cart';

const ReservationForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
  });
  const [addOrder, { data }] = useMutation(ADD_ORDER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addOrder({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
      <div className="my-2">
        {data ? (
          <p>
            Success! You may now head{' '}
            <Link to="/">back to the homepage.</Link>
          </p>
        ) : (
          <form className="form-inline" onSubmit={handleFormSubmit}>
            <Form.Group>
              <label for="name">Full Name: </label>
              <input type="text" placeholder="Full name" name="name" required value={formState.name} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
              <label for="phone">Phone Number: </label>
              <input type="tel" placeholder="Contact number" name="phone" required value={formState.phone} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
              <label for="email">Email Address: </label>
              <input type="email" placeholder="Email address" name="email" required value={formState.email} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
              <label
                for="date">Desired Tour Date: </label>
              <input type="date" placeholder="01/01/2022" name="date" required value={formState.date} onChange={handleChange} />
            </Form.Group>

            <Form.Select
                placeholder="Departure time:"
                for="time"
                name="time" value={formState.time} onChange={handleChange}>
                <option value="08:30">8:30 A.M.</option>
                <option value="14:00">2:00 P.M.</option>
            </Form.Select>

            <button type="submit">
              Complete and Pay
            </button>
          </form>
        )}
      </div>
      <div>
        <Cart />
      </div>

    </>
  )
}

export default ReservationForm;
