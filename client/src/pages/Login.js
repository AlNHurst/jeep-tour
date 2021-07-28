import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';
import { Card } from 'react-bootstrap';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
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

export default Login;
