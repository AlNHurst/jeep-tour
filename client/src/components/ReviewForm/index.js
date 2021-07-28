import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../../utils/mutations';
import { Form, Card, Button } from 'react-bootstrap';
import './style.css';

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
        <Card>
          <Card.Body>
            <form className="form-inline" onSubmit={handleFormSubmit}>
              <Form.Group>
                <Form.Label>Name: </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange} >
                </Form.Control>
              </Form.Group>


              <Form.Group>
                <Form.Label>Comment:</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Please type your review"
                  name="comment"
                  required
                  value={formState.comment}
                  onChange={handleChange} />
              </Form.Group>

              <Form.Group
                value={formState.rating}
                onChange={handleChange}>
                <Form.Label>Rating</Form.Label>
                <input className="star" type="radio" name="rating" value="1" /><i className="far fa-star"></i>
                <input className="star" type="radio" name="rating" value="2" /><i className="far fa-star"></i>
                <input className="star" type="radio" name="rating" value="3" /><i className="far fa-star"></i>
                <input className="star" type="radio" name="rating" value="4" /><i className="far fa-star"></i>
                <input className="star" type="radio" name="rating" value="5" /><i className="far fa-star"></i>
              </Form.Group>

              <div className="d-grid gap-2">
                <Button
                  style={{ backgroundColor: '#2b6d2bb6', color: '#fff' }}
                  variant="secondary"
                  size="md"
                  type="submit">Submit
                </Button>
              </div>
            </form>
          </Card.Body>
        </Card>

      )}
    </div>

  )
}

export default ReviewForm;
