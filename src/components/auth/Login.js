<<<<<<< HEAD
import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import Spinner from "../shared/Spinner";

const Login = ({ login, isAuthenticated, loading, location }) => {
=======
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import Spinner from '../shared/Spinner';
import Spinner1 from '../shared/Spinner1';

const Login = ({ login, isAuthenticated }) => {
  const [loggedInState, setLoggedInState] = useState();

>>>>>>> 52fcb3654d32850e0552948ceb3043208d7b501a
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  console.log("Loading value ... ", loading);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setLoggedInState('Logging In');
    login(email, password);
  };
  // console.log("LOCATION STATE ... ", location.state);
  const { from } = location.state || { from: "/manage-account" };
  // console.log("FROM ... ", from);
  if (isAuthenticated) {
    return <Redirect to={from} />;
  }
  return (
<<<<<<< HEAD
    <Fragment>
      {loading && <Spinner />}

      <section className="form py-5 mt-5">
        <div className="row">
          <div className="col-md-6 m-auto">
            <div className="card bg-white px-4">
              <div className="card-body">
                <h1>
                  <i className="fas fa-sign-in-alt"></i> Login
                </h1>
                <p>
                  Log in to list your bootcamp or rate, review and favorite
                  bootcamps
                </p>
                <form className="form" onSubmit={onSubmit}>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={onChange}
                      // required
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={onChange}
                      // minLength="6"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-primary btn-block"
                    />
                  </div>
                </form>
                <p>
                  {" "}
                  Forgot Password?{" "}
                  <Link to="/reset-password">Reset Password</Link>
                </p>
              </div>
=======
    <section className='form py-5 mt-5'>
      {/* <div className='container'> */}
      {loggedInState === 'Logging In' ? <Spinner /> : ''}
      <div className='row'>
        <div className='col-md-6 m-auto'>
          <div className='card bg-white px-4'>
            <div className='card-body'>
              <h1>
                <i className='fas fa-sign-in-alt'></i> Login
              </h1>
              <p>
                Log in to list your bootcamp or rate, review and favorite
                bootcamps
              </p>
              <form className='form' onSubmit={onSubmit}>
                <div className='form-group'>
                  <label htmlFor='email'>Email Address</label>
                  <input
                    type='email'
                    name='email'
                    className='form-control'
                    placeholder='Enter email'
                    value={email}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className='form-group mb-4'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='Enter password'
                    value={password}
                    onChange={onChange}
                    minLength='6'
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='submit'
                    value='Login'
                    className='btn btn-primary btn-block'
                  />
                </div>
              </form>
              <p>
                {' '}
                Forgot Password?{' '}
                <Link to='/reset-password'>Reset Password</Link>
              </p>
>>>>>>> 52fcb3654d32850e0552948ceb3043208d7b501a
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  loading: state.auth.loading,
});

export default connect(mapStateToProps, { login })(Login);
