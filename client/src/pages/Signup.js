import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

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
          <h4 className="">Sign Up</h4>
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
                    className="label">Username <span className="icon is-small">
                      <i className="fa fa-user">
                      </i>
                    </span></label>
                  <div className="control">
                    <input type="text" placeholder="Username" className="input" name="username" value={formState.name}
                      onChange={handleChange} />
                  </div>
                </div>
              
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
    </main>
  );
};

export default Signup;
