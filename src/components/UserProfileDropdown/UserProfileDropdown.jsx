import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";

import { signOutUser } from "../../app/actions";

const UserProfileDropdown = (props) => {
  const {
    signOutUser,
    userProfile: { firstName, lastName, email, userType },
  } = props;
  const [profileDropdownVisible, setProfileDropdownVisible] = useState(false);
  const ref = useRef(null);

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
    <div>
      <div className="relative p-0">
        <button
          onMouseEnter={() => setProfileDropdownVisible(true)}
          onClick={() => setProfileDropdownVisible(!profileDropdownVisible)}
          className="flex items-center space-x-2 outline-none focus:outline-none px-2 py-2 hover:bg-gray-200 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 xl:w-7" viewBox="0 0 512 512">
            <path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z" />
            <path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z" />
          </svg>
        </button>
        {profileDropdownVisible && (
          <div
            onMouseLeave={() => setProfileDropdownVisible(false)}
            ref={ref}
            className="absolute right-0 mr-1 xl:mr-0 bg-white shadow mt-1 border-2 border-black"
          >
            <div className="flex items-center justify-between px-2 xl:px-3 border-b hover:bg-gray-50 space-x-10">
              <div className="flex items-center space-x-2 py-3">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-7" viewBox="0 0 512 512">
                    <path d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z" />
                    <path d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-sm xl:text-base font-medium">
                    {firstName} {lastName}
                  </h1>
                  <p className="text-sm xl:text-base">{email}</p>
                </div>
              </div>
              <button className="text-xs uppercase outline-none focus:outline-none px-1 py-1 bg-gray-100 font-reguler focus:ring-2 focus:ring-black rounded">
                Edit
              </button>
            </div>
            <div className="px-1 xl:px-2">
              <ul className="py-2 text-sm xl:text-base">
                <div>
                  <li className="hover:bg-gray-100 rounded px-2 xl:px-3 py-2 cursor-pointer">My Profile</li>
                  <li className="hover:bg-gray-100 px-2 xl:px-3 py-2 cursor-pointer">Edit Profile</li>
                  {userType === "employer" ? (
                    <div>
                      <li className="hover:bg-gray-100 px-2 xl:px-3 py-2 cursor-pointer">Manage Jobs</li>
                    </div>
                  ) : (
                    <div>
                      <li className="hover:bg-gray-100 px-2 xl:px-3 py-2 cursor-pointer">Saved Jobs</li>
                      <li className="hover:bg-gray-100 px-2 xl:px-3 py-2 cursor-pointer">Applied Jobs</li>
                    </div>
                  )}
                  <li className="hover:bg-gray-100 px-2 xl:px-3 py-2 cursor-pointer">Change Password</li>
                  <li onClick={signOutUser} className="hover:bg-gray-100 px-3 py-2 cursor-pointer">
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
                </div>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userProfile: state.userProfile,
});

const mapDispatchToProps = (dispatch) => ({
  signOutUser: () => dispatch(signOutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileDropdown);
