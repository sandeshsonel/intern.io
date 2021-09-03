import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import JobsList from "../../components/JobsList/JobsList";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";

import { getAllJobsStart } from "../../app/actions";
import Loader from "../../components/Loader/Loader";

import { getAllJobsApi } from "../../requests";

const Home = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getAllJobs();
  }, []);

  const getAllJobs = async () => {
    setIsLoading(true);
    const res = await props.getAllJobsApi({ category: "Software Development" });
    if (res.error) {
      setIsLoading(false);
      return;
    } else {
      setJobs(res.data);
    }
    console.log(res);
  };

  console.log("home-props", props);
  return (
    <div className="">
      <div className="max-w-6xl m-auto px-4 lg:px-0 py-8 md:py-16">
        <div className="">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            Find your internship with intern.io
          </h1>
          <p className="text-xl xl:text-2xl mt-3 text-gray-500">
            Browse thousands of internship job listings to work at startups and
            leading companies.
          </p>
        </div>
        <SearchBar />
        {isLoading ? (
          <div className="items-center text-center mt-4">
            <Loader />
          </div>
        ) : (
          <div>
            <JobsList jobs={jobs} />
            <Pagination />
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs,
});

const mapDispatchToProps = {
  getAllJobsApi,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
