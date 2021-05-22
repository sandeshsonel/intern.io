import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import SignInPage from "./pages/SigninSignUpPage/SignInPage/SignInPage";
import SignUpPage from "./pages/SigninSignUpPage/SignUpPage/SignUpPage";

const { default: Header } = require("./components/Header/Header");

function App() {
  return (
    <div className="font-rubik">
      <div>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
