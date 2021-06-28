import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route, Redirect, useLocation, BrowserRouter as Router } from "react-router-dom";

import { setLogin, setUserData } from "./app/actions";
import Header from "./components/Header/Header";

import Home from "./pages/Home/Home";

import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignInPage from "./pages/SignInSignUpPage/SignInPage";
import SignUpPage from "./pages/SignInSignUpPage/SignUpPage";

const DynamicRoutes = ({ isLogin }) => {
  const location = useLocation();

  if (!isLogin) {
    return (
      <Switch location={location} key={location.pathname}>
        <Route path="/login" component={SignInPage} />
        <Route path="/join" component={SignUpPage} />
        <Redirect exact from="/" to="/login" />
      </Switch>
    );
  } else {
    return (
      <>
        <Switch location={location} key={location.pathname}>
          <Route path="/profile" component={ProfilePage} />

          <Route path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
      </>
    );
  }
};

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  checkAutoLogin = () => {
    const { token, expireDate, setLogin } = this.props;
    if (token && new Date(expireDate) > new Date()) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };

  componentDidMount() {
    this.checkAutoLogin();
    this.setState({
      isLoading: false,
    });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.token !== this.props.token || new Date(this.props.expireDate) > new Date()) {
      this.checkAutoLogin();
    }
  }

  render() {
    console.log("xoxo-props-Routes", this.props);
    const { isLoading } = this.state;
    if (isLoading) {
      return <h1>Loding</h1>;
    }
    return (
      <React.Fragment>
        <Router>
          <Header />
          <DynamicRoutes {...this.state} {...this.props} />
        </Router>
      </React.Fragment>
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

export default connect(mapStateToProps, {
  setLogin,
  setUserData,
})(Routes);
