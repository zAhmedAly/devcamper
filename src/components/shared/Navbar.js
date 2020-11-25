import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul className="navbar-nav">
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#!"
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
            className="dropdown-item"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            to="/manage-reviews"
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
            onClick={logout}
            className="dropdown-item"
            data-toggle="collapse"
            data-target=".navbar-collapse.show"
            to="/login"
          >
            <i className="fas fa-sign-out-alt"></i> Logout
          </Link>
        </div>
      </li>
      <li className="nav-item py-0 d-none d-sm-block">
        <a className="nav-link" href="#!">
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
          <strong> Bootcamps</strong>
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li className="nav-item">
        <Link
          className="nav-link"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          to="/login"
        >
          <i className="fas fa-sign-in-alt"></i>
          <strong className="hide-sm"> Login</strong>
        </Link>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          data-toggle="collapse"
          data-target=".navbar-collapse.show"
          to="/register"
        >
          <i className="fas fa-user-plus"></i>{" "}
          <strong className="hide-sm"> Register</strong>
        </Link>
      </li>
      <li className="nav-item py-0 d-none d-sm-block">
        <a className="nav-link" href="#!">
          |
        </a>
      </li>
      <li className="nav-item">
        <Link
          className="nav-link"
          // data-toggle="collapse"
          // data-target=".navbar-collapse.show"
          to="/bootcamps"
        >
          <strong> Bootcamps</strong>
        </Link>
      </li>
    </ul>
  );

  // const guestLinks = (
  //   <ul>
  //     <li>
  //       <Link to="/bootcamps">Bootcamps</Link>
  //     </li>
  //     <li>
  //       <Link to="/register">Register</Link>
  //     </li>
  //     <li>
  //       <Link to="/login">Login</Link>
  //     </li>
  //   </ul>
  // );

  return (
    // < className="navbar nav-dark bg-primary py-0">
    <nav className="navbar navbar-expand-md navbar-dark bg-primary fixed-top py-0">
      <h1>
        <Link className="navbar-brand" to="/">
          <i className="fas fa-laptop-code"></i> <strong> DevCamper</strong>
        </Link>
      </h1>
      {/* <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#!navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button> */}
      {/* <h3>
        <Link to="/">
          <i className="fas fa-laptop-code"></i> <strong> DevCamper</strong>
        </Link>
      </h3> */}
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>

      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Fragment>{!isAuthenticated && guestLinks}</Fragment>
        <Fragment>{isAuthenticated && authLinks}</Fragment>
      </div> */}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
