import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Card } from "react-bootstrap";

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { data }] = useMutation(ADD_USER);

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
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main>
      <div>
        <div className="">
          {data ? (
            <p>
              Success! You may now head{' '}
              <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <div className="text-left">
              <Card>
                <Card.Body>
                  <form className="form-group">
                    <div onSubmit={handleFormSubmit}>
                    <div>
                        <label className="form-label" for="email"><span className="icon is-small">
                          <i className="fa fa-envelope">
                          </i>
                        </span> UserName </label>
                        <input className="form-control" type="username" placeholder="Enter email" name="username" required="required" value={formState.username} onChange={handleChange} />
                      </div>
                      <div>
                        <label className="form-label" for="email"><span className="icon is-small">
                          <i className="fa fa-envelope">
                          </i>
                        </span> Email </label>
                        <input className="form-control" type="email" placeholder="Enter email" name="email" required="required" value={formState.email} onChange={handleChange} />
                      </div>

                      <div>
                        <label className="form-label" for="pwd"><span className="icon is-small">
                          <i className="fa fa-lock">
                          </i>
                        </span> Password </label>
                        <input className="form-control" type="password" placeholder="*******" name="password" required value={formState.password} onChange={handleChange} />
                      </div>
                    </div>
                    <input className="form-control" type="submit" className="btn btn-primary btn-block" value="Login" />
                  </form>
                </Card.Body>
              </Card>

            </div>
          )}
          {/* {error && (
            <div className="my-3 p-3 bg-danger text-white">
              {error.message}
            </div>
          )} */}
        </div>
      </div>
    </main >
  );
};

        export default Signup;
