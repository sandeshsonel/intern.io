import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, useLocation, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import CandidatesPage from "./pages/CandidatesPage/CandidatesPage";
import EmployeeDashboard from "./pages/EmployeeDashboard/EmployeeDashboard";
import Home from "./pages/Home/Home";
import InboxPage from "./pages/InboxPage/InboxPage";
import ManageJobs from "./pages/ManageJobs/ManageJobs";
import PostJobs from "./pages/PostJobs/PostJobs";
import SearchJobListPage from "./pages/SearchJobListPage/SearchJobListPage";
import SignInPage from "./pages/SigninSignUpPage/SignInPage/SignInPage";
import SignUpPage from "./pages/SigninSignUpPage/SignUpPage/SignUpPage";
import StudentsApplications from "./pages/StudentsApplications/StudentsApplications";

const DynamicRoutes = (props) => {
  const { isLogin, userType } = props;
  const location = useLocation();
  console.log("xoxo", props);

  if (!isLogin) {
    return (
      <Switch location={location} key={location.pathname}>
        <Route path="/login" component={SignInPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route exact path="/" component={Home} />
        <Redirect exact to="/" />
      </Switch>
    );
  } else {
    return (
      <>
        <Switch location={location} key={location.pathname}>
          {userType === "student" ? (
            <Switch>
              {/* <Route path="/:jobSearchPageQuery" component={SearchJobListPage} /> */}
              <Route path="/myresume" />
              <Route path="/savedjobs" />
              <Route path="/applyjobs" />
              <Route exact path="/" component={Home} />
              <Redirect exact to="/" />
            </Switch>
          ) : (
            <Switch>
              {/* <Route path="/:searchjobpage" component={SearchJobListPage} /> */}
              <Route path="/post" component={PostJobs} />
              <Route path="/candidates" component={CandidatesPage} />
              <Route path="/inbox" component={InboxPage} />
              <Route path="/managejobs" component={ManageJobs} />
              <Route path="/studentapplications" component={StudentsApplications} />
              <Route exact path="/" component={EmployeeDashboard} />
              <Redirect exact to="/" />
            </Switch>
          )}
          {/* <Route exact path="/" component={Home} /> */}
          <Redirect exact to="/" />
        </Switch>
      </>
    );
  }
};
class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <DynamicRoutes {...this.state} {...this.props} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
  userType: state.userProfile.userType,
});

export default connect(mapStateToProps)(Routes);
