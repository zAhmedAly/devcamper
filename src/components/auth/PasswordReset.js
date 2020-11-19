import React from "react";
import { Link } from "react-router-dom";

const PasswordReset = () => {
  return (
    <section className="py-5 mt-5">
      <div className="row">
        <div className="col-md-10 m-auto">
          <div className="card bg-white">
            <div className="card-body">
              <h2 className="mb-2">
                <strong>Reset Password</strong>
              </h2>
              <p>
                Use this form to reset your password using the registered email
                address.
              </p>
              <form>
                <div className="form-group">
                  <label>Enter Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email address"
                  />
                </div>
                {/* <div className="form-group">
                  <input
                    type="submit"
                    value="Reset Password"
                    className="btn btn-dark btn-block"
                  />
                </div> */}
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="submit"
                        value="Reset Password"
                        className="btn btn-success btn-block"
                      />
                    </div>
                    <div className="col-md-6">
                      <Link to="/login" className="btn btn-secondary btn-block">
                        Cancel
                      </Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PasswordReset;
