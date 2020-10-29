import React from "react";
import { Link } from "react-router-dom";

const PasswordUpdate = () => {
  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-md-10 m-auto">
          <div className="card bg-white">
            <div className="card-body">
              <h1 className="mb-2">Update Password</h1>
              <form>
                <div className="form-group">
                  <label>Current Password</label>
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    placeholder="Current Password"
                  />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input
                    type="password"
                    name="newPassword"
                    className="form-control"
                    placeholder="New Password"
                  />
                </div>
                <div className="form-group">
                  <label>Confirm New Password</label>
                  <input
                    type="password"
                    name="newPassword2"
                    className="form-control"
                    placeholder="Confirm New Password"
                  />
                </div>
                {/* <div className="form-group">
                  <input
                    type="submit"
                    value="Update Password"
                    className="btn btn-dark btn-block"
                  />
                </div> */}
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="submit"
                        value="Change Password"
                        className="btn btn-success btn-block"
                      />
                    </div>
                    <div className="col-md-6">
                      <Link
                        to="/manage-account"
                        className="btn btn-secondary btn-block"
                      >
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

export default PasswordUpdate;
