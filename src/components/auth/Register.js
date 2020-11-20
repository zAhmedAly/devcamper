import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <section className="form py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-10 m-auto">
            <div className="card bg-white px-2">
              <div className="card-body">
                <h2 className="mb-3">
                  <i className="fas fa-user-plus"></i> <strong>Register</strong>
                </h2>
                {/* <p>
                  Register to list your bootcamp or rate, review and favorite
                  bootcamps
                </p> */}
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-group">
                        {/* <label htmlFor="name">Name</label> */}
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Enter full name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-group">
                        {/* <label htmlFor="email">Email Address</label> */}
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-2">
                      <div className="form-group">
                        {/* <label htmlFor="password">Password</label> */}
                        <input
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="Enter password"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 mb-2">
                      <div className="form-group">
                        {/* <label htmlFor="password2">Confirm Password</label> */}
                        <input
                          type="password"
                          name="password2"
                          className="form-control"
                          placeholder="Confirm password"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="card card-body mb-3">
                    {/* <h5>User Role</h5> */}
                    <label htmlFor="role">User Role</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="role"
                        value="user"
                        defaultChecked
                      />
                      <label className="form-check-label">
                        Regular User (Browse, Write reviews, etc)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="role"
                        value="publisher"
                      />
                      <label className="form-check-label">
                        Bootcamp Publisher
                      </label>
                    </div>
                  </div>
                  <p className="text-danger">
                    * You must be affiliated with the bootcamp in some way in
                    order to add it to DevCamper.
                  </p>
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <input
                          type="submit"
                          value="Register"
                          className="btn btn-primary btn-block"
                        />
                      </div>
                      <div className="col-md-6">
                        <Link
                          to="/login"
                          className="btn btn-secondary btn-block"
                        >
                          Cancel
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* <div className="form-group">
                    <input
                      type="submit"
                      value="Register"
                      className="btn btn-primary btn-block"
                    />
                  </div> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
