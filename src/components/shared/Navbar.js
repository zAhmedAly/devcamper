import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top py-0">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <i className="fas fa-laptop-code"></i> DevCamper
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                to="/login"
              >
                <i className="fas fa-sign-in-alt"></i> Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                to="/register"
              >
                <i className="fas fa-user-plus"></i> Register
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
              >
                <i className="fas fa-user"></i> User Account
              </a>
              <div className="dropdown-menu">
                <Link
                  className="dropdown-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  to="/manage-bootcamp"
                >
                  Manage Bootcamp
                </Link>
                <Link
                  className="dropdown-item active"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  to="manage-reviews"
                >
                  Manage Reviews
                </Link>
                <Link
                  className="dropdown-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  to="/manage-account"
                >
                  Manage Account
                </Link>
                <div className="dropdown-divider"></div>
                <Link
                  className="dropdown-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                  to="/login"
                >
                  <i className="fas fa-sign-out-alt"></i> Logout
                </Link>
              </div>
            </li>
            <li className="nav-item d-none d-sm-block">
              <a className="nav-link" href="#">
                |
              </a>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
                to="/bootcamps"
              >
                Browse Bootcamps
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
