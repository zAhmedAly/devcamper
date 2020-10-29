import React from "react";
import { Link } from "react-router-dom";

const BootcampDetails = () => {
  return (
    <section className="container mt-5">
      <div className="col-md">
        <Link to="/bootcamps" className="btn btn-secondary my-2">
          <i className="fas fa-chevron-left"> </i> Bootcamp List
        </Link>
      </div>
      <div className="row">
        <div className="col-md-8">
          <h2 className="my-2">
            <strong>DevWorks Bootcamp Reviews</strong>
          </h2>
          <p>
            Devworks is a full stack JavaScript Bootcamp located in the heart of
            Boston that focuses on the technologies you need to get a high
            paying job as a web developer
          </p>
          <p className="lead mb-4">
            Average Course Cost: <span className="text-primary">$10,000</span>
          </p>
          <div className="card mb-3">
            <h5 className="card-header bg-primary text-white">
              <strong> Front End Web Development</strong>
            </h5>
            <div className="card-body">
              <h5 className="card-title">Duration: 8 Weeks</h5>
              <p className="card-text">
                This course will provide you with all of the essentials to
                become a successful frontend web developer. You will learn to
                master HTML, CSS and front end JavaScript, along with tools like
                Git, VSCode and front end frameworks like Vue
              </p>
              <ul className="list-group mb-3">
                <li className="list-group-item">Cost: $8,000 USD</li>
                <li className="list-group-item">Skill Required: Beginner</li>
                <li className="list-group-item">
                  Scholarship Available:{" "}
                  <i className="fas fa-check text-success"></i>{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className="card mb-3">
            <h5 className="card-header bg-primary text-white">
              <strong>Full Stack Web Development</strong>
            </h5>
            <div className="card-body">
              <h5 className="card-title">Duration: 12 Weeks</h5>
              <p className="card-text">
                In this course you will learn full stack web development, first
                learning all about the frontend with HTML/CSS/JS/Vue and then
                the backend with Node.js/Express/MongoDB
              </p>
              <ul className="list-group mb-3">
                <li className="list-group-item">Cost: $10,000 USD</li>
                <li className="list-group-item">
                  Skill Required: Intermediate
                </li>
                <li className="list-group-item">
                  Scholarship Available:{" "}
                  <i className="fas fa-times text-danger"></i>{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <img src="img/image_1.jpg" className="img-thumbnail" alt="" />
          <h2 className="text-center my-4">
            <span className="badge badge-secondary badge-success rounded-circle p-2">
              8.8
            </span>{" "}
            Rating
          </h2>
          <Link to="/reviews" className="btn btn-dark btn-block my-3">
            <i className="fas fa-comments"></i> Read Reviews
          </Link>
          <Link to="/add-review" className="btn btn-light btn-block my-3">
            <i className="fas fa-pencil-alt"></i> Write a Review
          </Link>
          <Link
            to="www.mflix.cf"
            target="_blank"
            className="btn btn-secondary btn-block my-3"
          >
            <i className="fas fa-globe"></i> Visit Website
          </Link>
          <div
            id="map"
            style={{
              border: "1px solid black",
              width: "100%",
              height: "300px",
            }}
          ></div>
          <ul className="list-group list-group-flush mt-4">
            <li className="list-group-item">
              <i className="fas fa-check text-success"></i> Housing
            </li>
            <li className="list-group-item">
              <i className="fas fa-check text-danger"></i> Job Assistance
            </li>
            <li className="list-group-item">
              <i className="fas fa-times text-success"></i> Job Guarantee
            </li>
            <li className="list-group-item">
              <i className="fas fa-check text-success"></i> Accepts GI Bill
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default BootcampDetails;
