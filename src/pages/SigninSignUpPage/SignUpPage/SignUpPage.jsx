import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import googleImg from "../../../assets/images/search.svg";
import linkImg from "../../../assets/images/linkedin.svg";

import { signUpUser } from "../../../app/actions";
import Loader from "../../../components/Loader/Loader";

const SignUpPage = (props) => {
  const { signUpUser, isLoading, handleClose } = props;
  const [userType, setUserType] = useState("student");
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [companyName, setCompanyName] = useState("");
  const [hidePassword, setHidePassword] = useState(true);
  const [inputFocused, setInputFocused] = useState(false);

  const onFocus = () => setInputFocused(true);
  const onBlur = () => setInputFocused(false);

  const handleChange = (e) => {
    setSignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (signUpDetails.password !== signUpDetails.confirmPassword) {
      return alert("Please check your confirm password");
    } else {
      signUpUser({ ...signUpDetails, userType: userType, companyName: userType === "employer" ? companyName : null });
      setSignUpDetails({ ...signUpDetails });
    }
  };

  console.log("xoxo", signUpDetails);
  return (
    <div className="px-4 mt-8 max-w-3xl m-auto">
      {isLoading && (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%) " }}>
          <Loader />
        </div>
      )}
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semiBold">Register</h1>
        </div>

        <div className="flex items-center space-x-4 py-2 mt-1">
          <button
            onClick={() => setUserType("student")}
            className={`outline-none focus:outline-none  ${
              userType === "student" ? "border-b-2 border-black font-semiBold" : "border-2-b border-transparent text-gray-500"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setUserType("employer")}
            className={`outline-none focus:outline-none ${
              userType === "employer" ? "border-b-2 border-black font-semiBold" : "border-2-b border-transparent text-gray-500"
            }`}
          >
            Employer
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} action="">
        <div className="space-y-2 mt-1">
          {userType === "employer" && (
            <div>
              <div>
                <label className="font-medium text-sm text-gray-500" htmlFor="">
                  Company Name
                </label>
                <input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                  className="mt-1 xl:mt-2 cursor-pointer w-full outline-none border-2 py-2 px-3 focus:border-black focus:outline-none transition-colors duration-200"
                  type="text"
                  placeholder=""
                />
              </div>
            </div>
          )}
          <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4 md:space-y-0 lg:space-y-0 xl:space-y-0 md:flex md:space-x-4 md:items-center lg:flex lg:items-center xl:flex xl:items-center xl:space-x-4">
            <div className="w-full">
              <label className="font-medium text-sm text-gray-500" htmlFor="">
                Frist Name
              </label>
              <input
                name="firstName"
                value={signUpDetails.firstName}
                onChange={handleChange}
                className="mt-1 xl:mt-2 cursor-pointer w-full outline-none border-2 py-2 px-3 focus:border-black focus:outline-none transition-colors duration-200"
                placeholder=""
                type="text"
                required
              />
            </div>
            <div className="w-full">
              <label className="font-medium text-sm text-gray-500" htmlFor="">
                Last Name
              </label>
              <input
                name="lastName"
                value={signUpDetails.lastName}
                onChange={handleChange}
                className="mt-1 xl:mt-2 cursor-pointer w-full outline-none border-2 py-2 px-3 focus:border-black focus:outline-none transition-colors duration-200"
                placeholder=""
                type="text"
                required
              />
            </div>
          </div>

          <div
            // className="space-y-2"
            className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4 md:space-y-0 lg:space-y-0 xl:space-y-0 md:flex md:space-x-4 md:items-center lg:flex lg:items-center xl:flex xl:items-center xl:space-x-4"
          >
            <div className="w-full">
              <label className="font-medium text-sm uppercase text-gray-500" htmlFor="">
                Phone
              </label>
              <input
                name="phoneNumber"
                value={signUpDetails.phoneNumber}
                onChange={handleChange}
                className="mt-1 xl:mt-2 cursor-pointer w-full outline-none border-2 py-2 px-3 focus:border-black focus:outline-none transition-colors duration-200"
                placeholder=""
                type="phone"
                required
              />
            </div>
            <div className="w-full">
              <label className="font-medium text-sm uppercase text-gray-500" htmlFor="">
                Email
              </label>
              <input
                name="email"
                value={signUpDetails.email}
                onChange={handleChange}
                className="mt-1 xl:mt-2 cursor-pointer w-full outline-none border-2 py-2 px-3 focus:border-black focus:outline-none transition-colors duration-200"
                placeholder=""
                type="email"
                required
              />
            </div>
          </div>

          <div
            // className="space-y-2"
            className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4 md:space-y-0 lg:space-y-0 xl:space-y-0 md:flex md:space-x-4 md:items-center lg:flex lg:items-center xl:flex xl:items-center xl:space-x-4"
          >
            <div className="w-full">
              <label className="font-medium text-sm uppercase text-gray-500" htmlFor="">
                Password
              </label>
              <div
                className={`flex items-center justify-between border-2 py-2 px-3 mt-1 xl:mt-2 ${
                  inputFocused ? "border-2 border-black transition-colors duration-200" : ""
                }`}
              >
                <input
                  name="password"
                  value={signUpDetails.password}
                  onChange={handleChange}
                  type={hidePassword ? "password" : "text"}
                  className="cursor-pointer w-full outline-none"
                  placeholder=""
                  required
                  onFocus={onFocus}
                  onBlur={onBlur}
                />
                <div>
                  {hidePassword ? (
                    <div className="cursor-pointer">
                      <svg
                        onClick={() => setHidePassword(!hidePassword)}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 fill-current text-gray-600"
                        viewBox="0 0 512 512"
                      >
                        <path d="M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM255.66 384c-41.49 0-81.5-12.28-118.92-36.5-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 00.14-2.94L93.5 161.38a2 2 0 00-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0075.8-12.58 2 2 0 00.77-3.31l-21.58-21.58a4 4 0 00-3.83-1 204.8 204.8 0 01-51.16 6.47zM490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 00-74.89 12.83 2 2 0 00-.75 3.31l21.55 21.55a4 4 0 003.88 1 192.82 192.82 0 0150.21-6.69c40.69 0 80.58 12.43 118.55 37 34.71 22.4 65.74 53.88 89.76 91a.13.13 0 010 .16 310.72 310.72 0 01-64.12 72.73 2 2 0 00-.15 2.95l19.9 19.89a2 2 0 002.7.13 343.49 343.49 0 0068.64-78.48 32.2 32.2 0 00-.1-34.78z" />
                        <path d="M256 160a95.88 95.88 0 00-21.37 2.4 2 2 0 00-1 3.38l112.59 112.56a2 2 0 003.38-1A96 96 0 00256 160zM165.78 233.66a2 2 0 00-3.38 1 96 96 0 00115 115 2 2 0 001-3.38z" />
                      </svg>
                    </div>
                  ) : (
                    <div className="cursor-pointer">
                      <svg
                        onClick={() => setHidePassword(!hidePassword)}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 fill-current text-gray-600"
                        viewBox="0 0 512 512"
                      >
                        <path
                          d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                        />
                        <circle cx="256" cy="256" r="80" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="32" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="w-full">
              <label className="font-medium text-sm uppercase text-gray-500" htmlFor="">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                value={signUpDetails.confirmPassword}
                onChange={handleChange}
                className="mt-1 xl:mt-2 cursor-pointer w-full outline-none border-2 py-2 px-3 focus:border-black focus:outline-none transition-colors duration-200"
                placeholder=""
                type="password"
                required
              />
            </div>
          </div>
        </div>
        <button type="submit" className="mt-8 outline-none w-full focus:outline-none bg-black px-16 text-white py-2">
          {userType === "student" ? "Register as Student" : "Register as Employer"}
        </button>

        {/* <div className="flex items-center space-x-3 py-3">
          <button className="flex w-full border-2 border-black space-x-1">
            <div className="m-auto flex space-x-2 py-2">
              <img className="w-5" src={googleImg} alt="" />
              <span className="font-medium">Google</span>
            </div>
          </button>
          <button className="flex w-full border-2 border-black space-x-1">
            <div className="m-auto flex space-x-2 py-2">
              <img className="w-5" src={linkImg} alt="" />
              <span className="font-medium">Linkedin</span>
            </div>
          </button>
        </div> */}
      </form>

      <div>
        <p className="mt-4 font-medium cursor-pointer text-center xl:text-left">
          Already have an account?&nbsp;
          <Link to="/login">
            <span className="text-blue-600 underline">Log in</span>
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
  signUpUser: (data) => dispatch(signUpUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
