import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import googleImg from "../../../assets/images/search.svg";
import linkImg from "../../../assets/images/linkedin.svg";

import { setSignInUserDetails } from "../../../app/actions";
import Loader from "../../../components/Loader/Loader";

const SignInPage = (props) => {
  const { setSignInUserDetails, isLoading, handleClose } = props;
  const [userType, setUserType] = useState("student");
  const [signInDetails, setSignInDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setSignInDetails({ ...signInDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSignInUserDetails(signInDetails);
    setSignInDetails({ ...signInDetails, email: "", password: "" });
  };

  console.log(props);
  return (
    <div className="px-4 mt-8 max-w-xl m-auto">
      {isLoading && (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%) " }}>
          <Loader />
        </div>
      )}
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semiBold">Sign in</h1>
        </div>
      </div>

      <form onSubmit={handleSubmit} action="">
        <div className="space-y-3 mt-4">
          <div className="w-full">
            <label className="font-medium text-sm text-gray-500" htmlFor="">
              Email
            </label>
            <input
              name="email"
              value={signInDetails.email}
              onChange={handleChange}
              className="mt-1 xl:mt-2 cursor-pointer w-full outline-none border-2 py-2 px-3 focus:border-black focus:outline-none transition-colors duration-200"
              placeholder=""
              type="text"
              required
            />
          </div>
          <div className="w-full">
            <label className="font-medium text-sm text-gray-500" htmlFor="">
              Password
            </label>
            <input
              name="password"
              value={signInDetails.password}
              onChange={handleChange}
              className="mt-1 xl:mt-2 cursor-pointer w-full outline-none border-2 py-2 px-3 focus:border-black focus:outline-none transition-colors duration-200"
              placeholder=""
              type="password"
              required
            />
          </div>
        </div>
        <button type="submit" className="mt-8 outline-none w-full xl:w-auto focus:outline-none bg-black px-16 text-white py-2">
          Sign In
        </button>
      </form>

      <div>
        <p className="mt-4 font-medium cursor-pointer text-center xl:text-left">
          Already have an account?&nbsp;
          <Link to="/signup">
            <span className="text-blue-600 underline">Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.auth.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  setSignInUserDetails: (data) => dispatch(setSignInUserDetails(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
