import React from "react";
import { Link } from "react-router-dom";

const ReviewsManage = () => {
  return (
    <section className="py-5 mt-5">
      <div className="row">
        <div className="col-md-10 m-auto">
          <div className="card bg-white">
            <div className="card-body">
              <Link to="/manage-bootcamp" className="btn btn-secondary my-2">
                <i className="fas fa-chevron-left"></i> Manage Bootcamp
              </Link>
              <h3 className="mb-4">Manage Reviews</h3>
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img src="img/image_1.jpg" className="card-img" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">
                        <Link to="/bootcamp-details">
                          Devworks Bootcamp
                          <span className="float-right badge badge-success">
                            4.9
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
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Bootcamp</th>
                    <th scope="col">Rating</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>DevWorks Bootcamp</td>
                    <td>10</td>
                    <td>
                      <Link to="/add-review" className="btn btn-secondary">
                        <i className="fas fa-pencil-alt"></i>
                      </Link>
                      <button className="btn btn-danger">
                        <i className="fas fa-times"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Codemasters</td>
                    <td>7</td>
                    <td>
                      <Link to="/add-review" className="btn btn-secondary">
                        <i className="fas fa-pencil-alt"></i>
                      </Link>
                      <button className="btn btn-danger">
                        <i className="fas fa-times"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsManage;
