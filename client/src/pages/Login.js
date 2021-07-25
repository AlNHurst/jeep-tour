import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

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
          <h4 className="">Login to Post Reviews!</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form className="box" onSubmit={handleFormSubmit}>
                <div className="field">
                  <label
                    className="label">Email <span className="icon is-small">
                      <i className="fa fa-envelope">
                      </i>
                    </span></label>
                  <div className="control">
                    <input type="email" placeholder="email@email.com" className="input" name="email" value={formState.email}
                      onChange={handleChange} />
                  </div>
                </div>

                <div className="field">
                  <label
                    className="label">Password <span className="icon is-small">
                      <i className="fa fa-lock">
                      </i>
                    </span></label>
                  <div className="control">
                    <input type="password" placeholder="******" className="input" name="password" value={formState.password}
                      onChange={handleChange} />
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
              
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main >
  );
};

export default Login;
