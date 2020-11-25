import React from "react";
import Alert from "./Alert";

const Footer = () => {
  return (
    // <nav className="navbar fixed-bottom navbar-light bg-light">
    //   <span className="navbar-text text-center">
    //     Copyright &copy; DevCamper 2020
    //   </span>
    // </nav>

    <footer>
      <div className="container">
        <div
          className="row fixed-bottom bg-light"
          style={{ "border-top": "solid 2px black" }}
        >
          <div className="col-md text-center py-3">
            Copyright &copy; DevCamper 2020
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
