import React from "react";
import { Link } from "react-router-dom";

const ReviewAdd = () => {
  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-md-10 m-auto">
          <div className="card bg-white">
            <div className="card-body">
              <h1 className="mb-2">DevWorks Bootcamp</h1>
              <h3 className="text-primary mb-4">Write a Review</h3>
              <p>
                You must have attended and graduated this bootcamp to review
              </p>
              <form action="reviews.html">
                <div className="form-group">
                  <label for="rating">
                    Rating: <span className="text-primary">8</span>
                  </label>
                  <input
                    type="range"
                    className="custom-range"
                    min="1"
                    max="10"
                    step="1"
                    value="8"
                    id="rating"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Review title"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="review"
                    rows="6"
                    className="form-control"
                    placeholder="Your review"
                  ></textarea>
                </div>
                {/* <div className="form-group">
                  <input
                    type="submit"
                    value="Submit Review"
                    className="btn btn-success btn-block"
                  />
                </div> */}
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <input
                        type="submit"
                        value="Submit Review"
                        className="btn btn-success btn-block"
                      />
                    </div>
                    <div className="col-md-6">
                      <Link
                        to="/bootcamp-details"
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

export default ReviewAdd;
