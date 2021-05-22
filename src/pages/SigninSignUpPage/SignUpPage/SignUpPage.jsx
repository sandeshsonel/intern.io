import React, { useState } from "react";

import googleImg from "../../../assets/images/search.svg";
import linkImg from "../../../assets/images/linkedin.svg";

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

  const handleChange = (e) => {
    setSignUpDetails({ ...signUpDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (signUpDetails.password !== signUpDetails.confirmPassword) {
      return alert("Please check your confirm password");
    } else {
      signUpUser(signUpDetails);
      setSignUpDetails({ ...signUpDetails });
    }
  };
  return (
    <div className="px-4 mt-8 max-w-3xl m-auto">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semiBold">Register</h1>
        </div>

        <div className="flex items-center space-x-4 py-2 mt-1">
          <button
            onClick={() => setUserType("student")}
            className={`outline-none focus:outline-none  ${userType === "student" ? "border-b-2 border-black" : "border-2-b border-transparent"}`}
          >
            Student
          </button>
          <button
            onClick={() => setUserType("employer")}
            className={`outline-none focus:outline-none ${userType === "employer" ? "border-b-2 border-black" : "border-2-b border-transparent"}`}
          >
            Employer
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} action="">
        <div className="space-y-3 mt-4">
          <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4 md:space-y-0 lg:space-y-0 xl:space-y-0 md:flex md:space-x-4 md:items-center lg:flex lg:items-center xl:flex xl:items-center xl:space-x-4">
            <div className="w-full">
              <label className="font-medium text-sm text-gray-500" htmlFor="">
                First Name
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

          <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4 md:space-y-0 lg:space-y-0 xl:space-y-0 md:flex md:space-x-4 md:items-center lg:flex lg:items-center xl:flex xl:items-center xl:space-x-4">
            <div className="w-full">
              <label className="font-medium text-sm uppercase text-gray-500" htmlFor="">
                Phone Number
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

          <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4 md:space-y-0 lg:space-y-0 xl:space-y-0 md:flex md:space-x-4 md:items-center lg:flex lg:items-center xl:flex xl:items-center xl:space-x-4">
            <div className="w-full">
              <label className="font-medium text-sm uppercase text-gray-500" htmlFor="">
                Password
              </label>
              <input
                name="password"
                value={signUpDetails.password}
                onChange={handleChange}
                className="mt-1 xl:mt-2 cursor-pointer w-full outline-none border-2 py-2 px-3 focus:border-black focus:outline-none transition-colors duration-200"
                placeholder=""
                type="password"
                required
              />
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
        <button type="submit" className="mt-8 outline-none w-full xl:w-auto focus:outline-none bg-black px-16 text-white py-2">
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

        <div>
          <p className="mt-4 font-medium cursor-pointer text-center xl:text-left">
            Already have an account? <span className="text-blue-600 underline">Log in</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
