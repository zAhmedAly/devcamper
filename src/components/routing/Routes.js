import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Register from "../auth/Register";
import Login from "../auth/Login";
import AccountManage from "../auth/AccountManage";
import PasswordReset from "../auth/PasswordReset";
import PasswordUpdate from "../auth/PasswordUpdate";
import BootcampAdd from "../bootcamps/BootcampAdd";
import BootcampDetails from "../bootcamps/BootcampDetails";
import BootcampList from "../bootcamps/BootcampList";
import BootcampManage from "../bootcamps/BootcampManage";
import BootcampManageNone from "../bootcamps/BootcampManageNone";
import CourseAdd from "../courses/CourseAdd";
import CoursesManage from "../courses/CoursesManage";
import CoursesManageNone from "../courses/CoursesManageNone";
import ReviewAdd from "../reviews/ReviewAdd";
import ReviewList from "../reviews/ReviewList";
import ReviewsManage from "../reviews/ReviewsManage";

import Alert from "../shared/Alert";
import NotFound from "../shared/NotFound";
import PrivateRoute from "../routing/PrivateRoute";

const Routes = (props) => {
  console.log("ROUTES PROPS = ", props);
  return (
    <Fragment>
      <main className="py-0">
        <div className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/reset-password" component={PasswordReset} />
            <PrivateRoute
              exact
              path="/update-password"
              component={PasswordUpdate}
            />
            <PrivateRoute
              exact
              path="/manage-account"
              component={AccountManage}
            />

            <Route exact path="/bootcamps" component={BootcampList} />
            <Route exact path="/bootcamp-details" component={BootcampDetails} />
            <PrivateRoute
              exact
              path="/manage-bootcamp"
              component={BootcampManage}
            />
            <PrivateRoute exact path="/add-bootcamp" component={BootcampAdd} />

            <PrivateRoute
              exact
              path="/manage-bootcamp-none"
              component={BootcampManageNone}
            />
            <PrivateRoute exact path="/add-course" component={CourseAdd} />
            <PrivateRoute
              exact
              path="/manage-courses"
              component={CoursesManage}
            />
            <PrivateRoute
              exact
              path="/manage-courses-none"
              component={CoursesManageNone}
            />
            <PrivateRoute exact path="/add-review" component={ReviewAdd} />
            <Route exact path="/reviews" component={ReviewList} />
            <PrivateRoute
              exact
              path="/manage-reviews"
              component={ReviewsManage}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </main>
    </Fragment>
  );
};

export default Routes;
