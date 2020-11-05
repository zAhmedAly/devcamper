import React from "react";
import { Link } from "react-router-dom";

const ReviewList = () => {
  return (
    <section className="py-5 mt-5">
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
          <div className="card mb-3">
            <h5 className="card-header bg-primary text-white">
              <strong>Fantastic Bootcamp</strong>
            </h5>
            <div className="card-body">
              <h5 className="card-title">
                {" "}
                <strong>
                  {" "}
                  Rating: <span className="text-success">10</span>{" "}
                </strong>
              </h5>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi similique mollitia, praesentium, animi harum officia
                dolores corporis ex tempore consequuntur dolorem ullam dolorum
                magnam corrupti quaerat tempora repudiandae! Similique,
                molestiae. Iste, blanditiis recusandae unde tenetur eius
                exercitationem rerum a fuga.
              </p>
              <p className="text-muted">Writtern By Kevin Smith</p>
            </div>
          </div>

          <div className="card mb-3">
            <h5 className="card-header bg-primary text-white">
              <strong>Learned a Lot</strong>
            </h5>
            <div className="card-body">
              <h5 className="card-title">
                <strong>
                  {" "}
                  Rating: <span className="text-success">9</span>{" "}
                </strong>
              </h5>
              <p className="card-text">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi similique mollitia, praesentium, animi harum officia
                dolores corporis ex tempore consequuntur dolorem ullam dolorum
                magnam corrupti quaerat tempora repudiandae! Similique,
                molestiae. Iste, blanditiis recusandae unde tenetur eius
                exercitationem rerum a fuga.
              </p>
              <p className="text-muted">Writtern By Jill Samson</p>
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
          <Link to="/add-review" className="btn btn-primary btn-block my-3">
            <i className="fas fa-pencil-alt"></i> Review This Bootcamp
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReviewList;
