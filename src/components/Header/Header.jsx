import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import Dialog from "@material-ui/core/Dialog";
import SignUpPage from "../../pages/SigninSignUpPage/SignUpPage/SignUpPage";
import SignInPage from "../../pages/SigninSignUpPage/SignInPage/SignInPage";

const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: "0",
    border: "2px solid black",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [dialogLogout, setDialogLogout] = useState(false);
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(false);
  const [value, setValue] = useState(1);
  const ref = useRef(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
  };

  const handleOpenLogoutDialog = () => {
    setDialogLogout(true);
  };
  const handleCloseLogoutDialog = () => {
    setDialogLogout(false);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setProfileDropdownVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  return (
    <div style={{ WebkitBackdropFilter: "blur(20px)", backdropFilter: "blur(20px)" }} className="py-3 xl:py-3 border-b sticky z-10 top-0 w-full">
      <div className="max-w-4xl m-auto px-4 lg:px-0">
        <div className="flex items-center justify-between">
          <div className="relative">
            <Link to="/">
              <a className="text-xl xl:text-4xl font-medium" href="">
                intern.io
              </a>
            </Link>
          </div>
          {true ? (
            <div className="space-x-3 xl:space-x-4">
              <Link to="/signup">
                <button className="font-medium outline-none uppercase text-sm xl:text-base focus:outline-none">Register</button>
              </Link>

              <Link to="/login">
                <button className="font-medium uppercase text-sm xl:text-base px-1 py-1 bg-black rounded text-white outline-none focus:outline-none">
                  Log in
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex items-center xl:space-x-2">
              <div className="relative">
                <button className="outline-none focus:outline-none px-2 py-2 hover:bg-gray-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 xl:w-6 text-black fill-current" viewBox="0 0 512 512">
                    <path d="M256 480a80.09 80.09 0 0073.3-48H182.7a80.09 80.09 0 0073.3 48zM400 288v-60.53C400 157 372.64 95.61 304 80l-8-48h-80l-8 48c-68.88 15.61-96 76.76-96 147.47V288l-48 64v48h384v-48z" />
                  </svg>
                </button>
                {/* <div className="absolute -right-40 bg-white shadow-md w-80 flex items-center justify-between border-2 border-black py-2 px-3">
                  <h1>Notification</h1>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5" viewBox="0 0 512 512">
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M368 368L144 144M368 144L144 368"
                      />
                    </svg>
                  </div>
                </div> */}
              </div>

              <div className="relative p-0">
                <button
                  onMouseEnter={() => setProfileDropdownVisible(true)}
                  onClick={() => setProfileDropdownVisible(true)}
                  className="outline-none focus:outline-none px-2 py-2 hover:bg-gray-200 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 xl:w-7" viewBox="0 0 512 512">
                    <path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z" />
                    <path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z" />
                  </svg>
                </button>
                {profileDropdownVisible && (
                  <div onMouseLeave={() => setProfileDropdownVisible(false)} ref={ref} className="absolute right-0 bg-white shadow mt-1 border-2 border-black">
                    <div className="flex items-center justify-between px-2 xl:px-3 border-b cursor-pointer hover:bg-gray-50 space-x-10">
                      <div className="flex items-center space-x-2 py-3">
                        <div>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 512 512">
                            <path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z" />
                            <path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z" />
                          </svg>
                        </div>
                        <div>
                          <h1 className="text-sm xl:text-base font-medium">Elon Musk</h1>
                          <p className="text-sm">elonmusk@gmail.com</p>
                        </div>
                      </div>
                      <button className="text-xs uppercase outline-none focus:outline-none px-1 py-1 bg-gray-100 font-reguler">Edit</button>
                    </div>
                    <div className="px-1 xl:px-2">
                      <ul className="py-2 text-sm">
                        <li className="hover:bg-gray-100 px-2 xl:px-3 py-2 cursor-pointer">My Profile</li>
                        <li className="hover:bg-gray-100 px-2 xl:px-3 py-2 cursor-pointer">Edit Profile</li>
                        <li className="hover:bg-gray-100 px-2 xl:px-3 py-2 cursor-pointer">Saved Jobs</li>
                        <li className="hover:bg-gray-100 px-2 xl:px-3 py-2 cursor-pointer">Applied Jobs</li>
                        <li className="hover:bg-gray-100 px-2 xl:px-3 py-2 cursor-pointer">Change Password</li>
                        <li onClick={handleOpenLogoutDialog} className="hover:bg-gray-100 px-3 py-2 cursor-pointer">
                          <div className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4" viewBox="0 0 512 512">
                              <path
                                d="M378 108a191.41 191.41 0 0170 148c0 106-86 192-192 192S64 362 64 256a192 192 0 0169-148M256 64v192"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="32"
                              />
                            </svg>
                            <span>Log out</span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Dialog classes={{ paper: classes.paper }} onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
        {value === 1 ? <SignUpPage handleClose={handleClose} /> : <SignInPage />}
      </Dialog>
      {/* <Dialog classes={{ paper: classes.paper }} onClose={handleCloseLogoutDialog} aria-labelledby="simple-dialog-title" open={dialogLogout}>
        <div className="px-4">
          <h1>Confirm Log out</h1>
          <div className="space-x-4">
            <button className="px-4 py-2">Cancel</button>
            <button className="px-4 py-2">Log out</button>
          </div>
        </div>
      </Dialog> */}
    </div>
  );
};

export default Header;
