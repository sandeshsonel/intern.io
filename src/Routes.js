import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, useLocation, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import PostJobs from "./pages/PostJobs/PostJobs";
import SignInPage from "./pages/SigninSignUpPage/SignInPage/SignInPage";
import SignUpPage from "./pages/SigninSignUpPage/SignUpPage/SignUpPage";

const DynamicRoutes = ({ isLogin }) => {
  const location = useLocation();

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
          <Route path="/post" component={PostJobs} />
          <Route exact path="/" component={Home} />
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

const mapStateToProps = ({ auth }) => ({
  isLogin: auth.isLogin,
  token: auth.token,
  email: auth.email,
  fullName: auth.fullName,
  expireDate: auth.expireDate,
});

export default connect(mapStateToProps)(Routes);
