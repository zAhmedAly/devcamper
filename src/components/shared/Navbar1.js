import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar1 = ({ auth: { isAuthenticated }, logout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top py-0">
      <div className="container">
        <Link className="navbar-brand" to="/">
          DevCamper{" "}
        </Link>
        <button
          className="navbar-toggler ml-auto"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="navbar-collapse collapse" id="navbarColor01">
          <ul className="navbar-nav ml-auto">
            {!isAuthenticated ? (
              <>
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <Link className="nav-link" to="/login">
                    <i className="fas fa-sign-in-alt"></i> Login
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li
                  className="nav-item"
                  data-toggle="collapse"
                  data-target=".navbar-collapse.show"
                >
                  <Link className="nav-link" to="/register">
                    <i className="fas fa-user-plus"></i> Register
                  </Link>
                </li>
              </>
            ) : (
              <li
                className="nav-item dropdown"
                data-toggle="collapse"
                data-target=".navbar-collapse.show"
              >
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  User Account
                </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div className="dropdown-divider"></div>
                  <Link onClick={logout} className="dropdown-item" to="/login">
                    <i className="fas fa-sign-out-alt"></i> Logout
                  </Link>
                </div>
              </li>
            )}
            <li
              className="nav-item"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              <Link className="nav-link" to="/bootcamps">
                Bootcamps
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Navbar1.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar1);
