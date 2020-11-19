import React from "react";
import { Link } from "react-router-dom";

const BootcampList = () => {
  return (
    <section className="py-5 mt-5">
      {/* <div className="container"> */}
      <div className="row">
        <div className="col-md-4">
          <div className="card card-body mb-4">
            <h4 className="mb-3">
              <strong>By Location</strong>
            </h4>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="miles"
                      placeholder="Miles From"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="zipcode"
                      placeholder="Enter Zipcode"
                    />
                  </div>
                </div>
              </div>
              <input
                type="submit"
                value="Find Bootcamps"
                className="btn btn-primary btn-block"
              />
            </form>
          </div>

          <div className="card card-body mb-4">
            <h4 className="mb-3">
              <strong>Filter</strong>
            </h4>
            <form>
              <div className="form-group">
                <label> Rating</label>
                <select className="custom-select mb-2" defaultValue="any">
                  <option value="any">Any</option>
                  <option value="9">9+</option>
                  <option value="8">8+</option>
                  <option value="7">7+</option>
                  <option value="6">6+</option>
                  <option value="5">5+</option>
                  <option value="4">4+</option>
                  <option value="3">3+</option>
                  <option value="2">2+</option>
                </select>
              </div>

              <div className="form-group">
                <label> Budget</label>
                <select className="custom-select mb-2" defaultValue="any">
                  <option value="any">Any</option>
                  <option value="20000">$20,000</option>
                  <option value="15000">$15,000</option>
                  <option value="10000">$10,000</option>
                  <option value="8000">$8,000</option>
                  <option value="6000">$6,000</option>
                  <option value="4000">$4,000</option>
                  <option value="2000">$2,000</option>
                </select>
              </div>
              <input
                type="submit"
                value="Find Bootcamps"
                className="btn btn-primary btn-block mb-3"
              />
            </form>
          </div>
        </div>

        <div className="col-md-8">
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
                      <span className="float-right badge badge-success">
                        8.8
                      </span>
                    </Link>
                  </h5>
                  <span className="badge badge-dark mb-2">Boston, MA</span>
                  <p className="card-text">
                    Web Development, UI/UX, Mobile Development
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src="img/image_2.jpg" className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to="/bootcamp-details">
                      <h3>
                        {" "}
                        <strong>ModernTech Bootcamp</strong>
                      </h3>
                      <span className="float-right badge badge-success">
                        7.5
                      </span>
                    </Link>
                  </h5>
                  <span className="badge badge-dark mb-2">Boston, MA</span>
                  <p className="card-text">
                    Web Development, UI/UX, Mobile Development
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src="img/image_3.jpg" className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to="/bootcamp-details">
                      <h3>
                        {" "}
                        <strong>Codemasters Bootcamp</strong>
                      </h3>

                      <span className="float-right badge badge-success">
                        9.2
                      </span>
                    </Link>
                  </h5>
                  <span className="badge badge-dark mb-2">Burlington, VT</span>
                  <p className="card-text">
                    Web Development, Data Science, Marketing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src="img/image_4.jpg" className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">
                    <Link to="/bootcamp-details">
                      <h3>
                        {" "}
                        <strong>DevCentral Bootcamp</strong>
                      </h3>

                      <span className="float-right badge badge-success">
                        6.4
                      </span>
                    </Link>
                  </h5>
                  <span className="badge badge-dark mb-2">Kingston, RI</span>
                  <p className="card-text">
                    Web Development, UI/UX, Mobile Development, Marketing
                  </p>
                </div>
              </div>
            </div>
          </div>

          <nav aria-label="Page navigation example">
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#!">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#!">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default BootcampList;
