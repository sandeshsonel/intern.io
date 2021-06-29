import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import PostJobs from "./pages/PostJobs/PostJobs";
import SignInPage from "./pages/SigninSignUpPage/SignInPage/SignInPage";
import SignUpPage from "./pages/SigninSignUpPage/SignUpPage/SignUpPage";
import history from "./utils/history";

const { default: Header } = require("./components/Header/Header");

function App() {
  return (
    <div className="font-rubik">
      <div>
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/login" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route path="/post" component={PostJobs} />

            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
