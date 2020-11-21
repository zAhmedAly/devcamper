import React from "react";
import { Link } from "react-router-dom";

const BootcampManage = () => {
  return (
    <section className="py-5 mt-5">
      <div className="row">
        <div className="col-md-10 m-auto">
          <div className="card bg-white">
            <div className="card-body">
              <Link to="/bootcamp-details" className="btn btn-secondary mt-2">
                <i className="fas fa-chevron-left"></i> Bootcamp Details
              </Link>
              <h2 className="my-3">Manage Bootcamp</h2>
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="img/image_1.jpg" className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to="/bootcamp-details">
                          <h3>
                            {" "}
                            <strong>Devworks Bootcamp</strong>
                          </h3>
                        </Link>
                        <span className="float-right badge badge-success">
                          8.8
                        </span>
                      </h5>
                      <span className="badge badge-dark mb-2">Boston, MA</span>
                      <p className="card-text">
                        Web Development, UI/UX, Mobile Development
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <form className="mb-4">
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <div className="form-group">
                      <div className="custom-file">
                        <input
                          type="file"
                          name="photo"
                          className="custom-file-input"
                          id="photo"
                        />
                        <label className="custom-file-label" htmlFor="photo">
                          Add Bootcamp Image
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <input
                      type="submit"
                      className="btn btn-success"
                      value="Upload Image"
                    />
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-md-4 mb-2">
                  <Link
                    to="/add-bootcamp"
                    className="btn btn-primary btn-block"
                  >
                    Edit Bootcamp Details
                  </Link>
                </div>
                <div className="col-md-4 mb-2">
                  <Link
                    to="/manage-courses"
                    className="btn btn-secondary btn-block"
                  >
                    Manage Courses
                  </Link>
                </div>
                <div className="col-md-4 mb-2">
                  <a href="#!" className="btn btn-danger btn-block">
                    Remove Bootcamp
                  </a>
                </div>
              </div>
              <p className="text-muted mt-2">
                * You can only add one bootcamp per account.
              </p>
              <p className="text-muted">
                * You must be affiliated with the bootcamp in some way in order
                to add it to DevCamper.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BootcampManage;
