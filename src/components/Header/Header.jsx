import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import SignUpPage from "../../pages/SigninSignUpPage/SignUpPage/SignUpPage";
import SignInPage from "../../pages/SigninSignUpPage/SignInPage/SignInPage";
import UserProfileDropdown from "../UserProfileDropdown/UserProfileDropdown";

const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: "0",
    border: "2px solid black",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const { isLogin, userType } = props;
  const [open, setOpen] = useState(false);
  const [dialogLogout, setDialogLogout] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [value, setValue] = useState(1);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
  };

  console.log(props);

  return (
    <div
      style={{ WebkitBackdropFilter: "blur(20px)", backdropFilter: "blur(20px)" }}
      className="py-2 xl:py-3 border-b-2 border-black sticky z-50 top-0 w-full bg-white"
    >
      <div className="max-w-5xl m-auto lg:px-0">
        <div className="flex items-center justify-between">
          <div className="relative ml-4 xl:ml-0">
            <Link to="/">
              <a className="text-xl lg:text-3xl xl:text-4xl font-medium" href="">
                intern.io
              </a>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            {userType === "employer" && (
              <ul className="flex items-center space-x-4">
                <li>
                  <Link to="/dashboard">
                    <button>Dashboard</button>
                  </Link>
                </li>
                {/* <li>
                  <Link to="/post">
                    <button>Post Job</button>
                  </Link>
                </li>
                <li>
                  <Link to="/managejobs">
                    <button>Manage Jobs</button>
                  </Link>
                </li> */}
              </ul>
            )}

            {isLogin ? (
              <div className="flex items-center mr-2 space-x-1 xl:space-x-2">
                <div className="relative">
                  <button className="outline-none focus:outline-none px-2 py-2 hover:bg-gray-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 xl:w-6 text-black fill-current" viewBox="0 0 512 512">
                      <title>Notifications</title>
                      <path d="M440.08 341.31c-1.66-2-3.29-4-4.89-5.93-22-26.61-35.31-42.67-35.31-118 0-39-9.33-71-27.72-95-13.56-17.73-31.89-31.18-56.05-41.12a3 3 0 01-.82-.67C306.6 51.49 282.82 32 256 32s-50.59 19.49-59.28 48.56a3.13 3.13 0 01-.81.65c-56.38 23.21-83.78 67.74-83.78 136.14 0 75.36-13.29 91.42-35.31 118-1.6 1.93-3.23 3.89-4.89 5.93a35.16 35.16 0 00-4.65 37.62c6.17 13 19.32 21.07 34.33 21.07H410.5c14.94 0 28-8.06 34.19-21a35.17 35.17 0 00-4.61-37.66zM256 480a80.06 80.06 0 0070.44-42.13 4 4 0 00-3.54-5.87H189.12a4 4 0 00-3.55 5.87A80.06 80.06 0 00256 480z" />
                    </svg>
                  </button>
                </div>

                <UserProfileDropdown />
              </div>
            ) : (
              <div className="space-x-3 mr-3 xl:space-x-4">
                <Link to="/signup">
                  <button
                    // onClick={() => {
                    //   setValue(1);
                    //   setOpen(true);
                    // }}
                    className="font-medium outline-none uppercase text-sm xl:text-base focus:outline-none"
                  >
                    Register
                  </button>
                </Link>

                <Link to="/login">
                  <button
                    // onClick={() => {
                    //   setValue(2);
                    //   setOpen(true);
                    // }}
                    className="font-medium uppercase text-sm xl:text-base px-1 py-1 bg-black rounded text-white outline-none focus:outline-none"
                  >
                    Log in
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <Dialog classes={{ paper: classes.paper }} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        {value === 1 ? <SignUpPage handleClose={handleClose} /> : <SignInPage />}
      </Dialog>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
  userType: state.userProfile.userType,
});

export default connect(mapStateToProps)(Header);
