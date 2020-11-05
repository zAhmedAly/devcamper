import React, { Fragment } from "react";

const NotFound = () => {
  return (
    <Fragment>
      <div className="py-5 mt-5">
        <h1 className="x-large text-primary">
          <i className="fas fa-exclamation-triangle" /> Page Not Found
        </h1>
        <p className="large">Sorry, this page does not exist</p>
      </div>
    </Fragment>
  );
};

export default NotFound;
