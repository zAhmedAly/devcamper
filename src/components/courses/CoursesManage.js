import React from "react";
import { Link } from "react-router-dom";

const CoursesManage = () => {
  return (
    <section className="py-5 mt-5">
      <div className="row">
        <div className="col-md-10 m-auto">
          <div className="card bg-white">
            <div className="card-body">
              <Link to="/manage-bootcamp" className="btn btn-secondary my-2">
                <i className="fas fa-chevron-left"></i> Manage Bootcamp
              </Link>
              <h1 className="mb-4">Manage Courses</h1>
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

              <Link to="/add-course" className="btn btn-primary btn-block mb-4">
                Add Bootcamp Course
              </Link>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Title</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Front End Web Development</td>
                    <td>
                      <Link to="/add-course" className="btn btn-secondary">
                        <i className="fas fa-pencil-alt"></i>
                      </Link>
                      <button className="btn btn-danger">
                        <i className="fas fa-times"></i>
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>Full Stack Web Development</td>
                    <td>
                      <a href="add-course.html" className="btn btn-secondary">
                        <i className="fas fa-pencil-alt"></i>
                      </a>
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

export default CoursesManage;
