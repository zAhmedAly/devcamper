import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => {
  return (
    <Fragment>
      {/* <img
        src={spinner}
        style={{ width: "400px", margin: "auto", display: "block" }}
        alt="Loading..."
      /> */}
      <div className="loader-container">
        <div className="loader">
          <img className="loader-img" src={spinner} alt="Loading ..." />
        </div>
      </div>
    </Fragment>
  );
};

export default Spinner;
