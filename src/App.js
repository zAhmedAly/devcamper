import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AccountManage from './components/auth/AccountManage';
import Login from './components/auth/Login';
import PasswordReset from './components/auth/PasswordReset';
import PasswordUpdate from './components/auth/PasswordUpdate';
import Register from './components/auth/Register';
import BootcampAdd from './components/bootcamps/BootcampAdd';
import BootcampDetails from './components/bootcamps/BootcampDetails';
import BootcampList from './components/bootcamps/BootcampList';
import BootcampManage from './components/bootcamps/BootcampManage';
import BootcampManageNone from './components/bootcamps/BootcampManageNone';
import CourseAdd from './components/courses/CourseAdd';
import CoursesManage from './components/courses/CoursesManage';
import CoursesManageNone from './components/courses/CoursesManageNone';
import ReviewAdd from './components/reviews/ReviewAdd';
import ReviewList from './components/reviews/ReviewList';
import ReviewsManage from './components/reviews/ReviewsManage';
import Landing from './components/shared/Landing';
import Navbar from './components/shared/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />

        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/reset-password' component={PasswordReset} />
        <Route exact path='/update-password' component={PasswordUpdate} />
        <Route exact path='/manage-account' component={AccountManage} />

        <Route exact path='/bootcamps' component={BootcampList} />
        <Route exact path='/bootcamp-details' component={BootcampDetails} />
        <Route exact path='/manage-bootcamp' component={BootcampManage} />
        <Route exact path='/add-bootcamp' component={BootcampAdd} />

        <Route
          exact
          path='/manage-bootcamp-none'
          component={BootcampManageNone}
        />
        <Route exact path='/add-course' component={CourseAdd} />
        <Route exact path='/manage-courses' component={CoursesManage} />
        <Route
          exact
          path='/manage-courses-none'
          component={CoursesManageNone}
        />
        <Route exact path='/add-review' component={ReviewAdd} />
        <Route exact path='/reviews' component={ReviewList} />
        <Route exact path='/manage-reviews' component={ReviewsManage} />
      </Switch>
    </Router>
  );
}

export default App;
