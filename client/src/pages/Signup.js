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
              
              <div className="login-form">
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                <div className="form-group">
                    <label for="username"><span className="icon is-small">
                      <i className="fa fa-user">
                      </i>
                    </span> Username </label>
                    <input class="form-control" type="text" placeholder="Enter username" name="username" required="required" value={formState.username} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label for="email"><span className="icon is-small">
                      <i className="fa fa-envelope">
                      </i>
                    </span> Email </label>
                    <input class="form-control" type="email" placeholder="Enter email" name="email" required="required" value={formState.email} onChange={handleChange} />
                  </div>

                  <div className="form-group">
                    <label for="pwd"><span className="icon is-small">
                      <i className="fa fa-lock">
                      </i>
                    </span> Password </label>
                    <input class="form-control" type="password" placeholder="*******" name="password" required value={formState.password} onChange={handleChange} />
                  </div>
                </div>
                <input type="submit" className="btn btn-primary btn-block" value="Sign Up" />
              </form>
            </div>

            )}

            {/* {error && (
              <div className="bg-danger text-white">
                {error.message}
              </div>
            )} */}
          </div>
        </div>
    </main>
  );
};

export default Signup;
