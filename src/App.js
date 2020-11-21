import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Landing from "./components/shared/Landing";
import Navbar from "./components/shared/Navbar";

import Routes from "./components/routing/Routes";
import { LOGOUT } from "./actions/types";

// Redux
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Spinner from "./components/shared/Spinner";
import Footer from "./components/shared/Footer";

function App({ loading }) {
  console.log("APP LOADING VALUE ... ", loading);
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
  }, []);

  return (
    <Fragment>
      {loading ? <Spinner /> : ""}
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
      <Footer />
    </Fragment>
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(App);
