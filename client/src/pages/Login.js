import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import { FormGroup } from 'react-bootstrap';

import Auth from '../utils/auth';

const Login = (props) => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { data }] = useMutation(LOGIN_USER);

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
            <form className="form-inline" onSubmit={handleFormSubmit}>
              <FormGroup>
                <label for="email"><span className="icon is-small">
                  <i className="fa fa-envelope">
                  </i>
                </span> Email: </label>
                <input type="email" placeholder="Enter email" name="email" required value={formState.email} onChange={handleChange} />
              
              <label for="pwd"><span className="icon is-small">
                <i className="fa fa-lock">
                </i>
              </span> Password: </label>
              <input type="password" placeholder="*******" name="password" required value={formState.password} onChange={handleChange} />

              <button type="submit">
                Login
              </button>
              </FormGroup>
            </form>
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
