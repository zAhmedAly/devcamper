<<<<<<< HEAD
import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Landing from "./components/shared/Landing";
import Navbar from "./components/shared/Navbar";
=======
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/shared/Landing';
import Navbar from './components/shared/Navbar';
>>>>>>> 52fcb3654d32850e0552948ceb3043208d7b501a

import Routes from './components/routing/Routes';
import { LOGOUT } from './actions/types';

// Redux
<<<<<<< HEAD
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import Spinner from "./components/shared/Spinner";
=======
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import Spinner from './components/shared/Spinner';
>>>>>>> 52fcb3654d32850e0552948ceb3043208d7b501a

function App({ loading }) {
  console.log("APP LOADING VALUE ... ", loading);
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
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
            <Route exact path='/' component={Landing} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
<<<<<<< HEAD
    </Fragment>
=======
      <Spinner />
    </Provider>
>>>>>>> 52fcb3654d32850e0552948ceb3043208d7b501a
  );
}

App.propTypes = {
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(App);
