import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../../utils/mutations';
import { Form } from 'react-bootstrap';

const ReviewForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    comment: '',
    rating: ''
  });
  const [addReview, { data }] = useMutation(ADD_REVIEW);

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
      await addReview({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="my-2">
      {data ? (
        <p>
          Thank you for {' '}
          <Link to="/">your review!</Link>
        </p>
      ) : (
        <form className="form-inline" onSubmit={handleFormSubmit}>
          <Form.Group>
            <label for="name">Name: </label>
            <input type="text" placeholder="Name" name="name" required value={formState.name} onChange={handleChange} />
          </Form.Group>

          <Form.Group>
            <label for="comment">Review: </label>
            <input type="textarea" placeholder="Please type your review" name="comment" required value={formState.comment} onChange={handleChange} />
          </Form.Group>

          <Form.Group>
            <label for="rating">Rating</label>
            <span class="star-rating">
              <input type="radio" name="rating" value="1"><i></i></input>
              <input type="radio" name="rating" value="2"><i></i></input>
              <input type="radio" name="rating" value="3"><i></i></input>
              <input type="radio" name="rating" value="4"><i></i></input>
              <input type="radio" name="rating" value="5"><i></i></input>
            </span>
          </Form.Group>

          <button type="submit">
            Submit Your Review
          </button>
        </form>
      )}
    </div>

  )
}

export default ReviewForm;
