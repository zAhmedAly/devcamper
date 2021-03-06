import React from "react";

const Landing = () => {
  return (
    <section className="showcase">
      <div className="dark-overlay">
        <div className="showcase-inner">
          <h1 className="display-4">Find a Code Bootcamp</h1>
          <p className="lead">
            Find, rate and read reviews on coding bootcamps
          </p>
          <form>
            <div className="row">
              <div className="col-md-8 m-auto">
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
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Landing;
