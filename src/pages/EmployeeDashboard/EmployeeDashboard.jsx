import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ManageJobs from "../ManageJobs/ManageJobs";
import PostJobs from "../PostJobs/PostJobs";
import StudentsApplications from "../StudentsApplications/StudentsApplications";

const EmployeeDashboard = (props) => {
  const { companyName } = props;
  const [value, setValue] = useState(1);

  return (
    <div className="">
      <div className="shadow-md">
        <div className="flex items-center justify-between py-3 max-w-5xl m-auto">
          <a className="text-2xl" href="">
            {companyName}
          </a>
          <Link to="/post">
            <button className="py-2 px-4 bg-black text-white">Create a new job</button>
          </Link>
        </div>
      </div>
      {/* <div className="flex items-center space-x-2 py-3">
        <button
          onClick={() => setValue(1)}
          className={`px-3 py-2 rounded-full outline-none focus:outline-none border-2 border-transparent ${
            value === 1 ? "border-2 border-black bg-gray-100 font-semiBold" : null
          }`}
        >
          Post Job
        </button>
        <button
          onClick={() => setValue(2)}
          className={`px-3 py-2 rounded-full outline-none focus:outline-none ${value === 2 ? "border-2 border-black bg-gray-100 font-semiBold" : null}`}
        >
          Manage Jobs
        </button>
        <button
          onClick={() => setValue(3)}
          className={`px-3 py-2 rounded-full outline-none focus:outline-none ${value === 3 ? "border-2 border-black bg-gray-100 font-semiBold" : null}`}
        >
          Student Applications
        </button>
      </div> */}
      {/* {value === 1 ? <PostJobs /> : value === 2 ? <ManageJobs /> : <StudentsApplications />} */}
      <ManageJobs />
    </div>
  );
};

const mapStateToProps = (state) => ({
  companyName: state.userProfile.companyName,
});

export default connect(mapStateToProps)(EmployeeDashboard);
