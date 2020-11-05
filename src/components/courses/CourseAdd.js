import React from "react";
import { Link } from "react-router-dom";

const CourseAdd = () => {
  return (
    <section className="py-5 mt-5">
      <div className="row">
        <div className="col-md-10 m-auto">
          <div className="card bg-white">
            <div className="card-body">
              <h1 className="mb-2">DevWorks Bootcamp</h1>
              <h3 className="text-primary mb-4">Add Course</h3>
              <form action="manage-bootcamp.html">
                <div className="form-group">
                  <label>Course Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Title"
                  />
                </div>
                <div className="form-group">
                  <label>Duration</label>
                  <input
                    type="number"
                    name="duration"
                    placeholder="Duration"
                    className="form-control"
                  />
                  <small className="form-text text-muted">
                    Enter number of weeks course lasts
                  </small>
                </div>
                <div className="form-group">
                  <label>Course Tuition</label>
                  <input
                    type="number"
                    name="tuition"
                    placeholder="Tuition"
                    className="form-control"
                  />
                  <small className="form-text text-muted">USD Currency</small>
                </div>
                <div className="form-group">
                  <label>Minimum Skill Required</label>
                  <select name="minimumSkill" className="form-control">
                    <option value="beginner" selected>
                      Beginner (Any)
                    </option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea
                    name="description"
                    rows="5"
                    className="form-control"
                    placeholder="Course description summary"
                    maxlength="500"
                  ></textarea>
                  <small className="form-text text-muted">
                    No more than 500 characters
                  </small>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="scholarshipAvailable"
                    id="scholarshipAvailable"
                  />
                  <label
                    className="form-check-label"
                    for="scholarshipAvailable"
                  >
                    Scholarship Available
                  </label>
                </div>
                {/* <div className="form-group mt-4">
                  <input
                    type="submit"
                    value="Add Course"
                    className="btn btn-success btn-block"
                  />
                </div> */}
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="submit"
                        value="Add Course"
                        className="btn btn-success btn-block"
                      />
                    </div>
                    <div className="col-md-6">
                      <Link
                        to="/manage-courses"
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

export default CourseAdd;
