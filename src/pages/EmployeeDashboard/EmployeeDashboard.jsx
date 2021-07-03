import React, { useState } from "react";
import ManageJobs from "../ManageJobs/ManageJobs";
import PostJobs from "../PostJobs/PostJobs";
import StudentsApplications from "../StudentsApplications/StudentsApplications";

const EmployeeDashboard = () => {
  const [value, setValue] = useState(1);
  return (
    <div className="max-w-4xl m-auto relative">
      <div className="flex items-center space-x-2 py-3">
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
      </div>
      {value === 1 ? <PostJobs /> : value === 2 ? <ManageJobs /> : <StudentsApplications />}
    </div>
  );
};

export default EmployeeDashboard;
