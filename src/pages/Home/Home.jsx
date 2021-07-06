import React, { useEffect } from "react";
import { connect } from "react-redux";
import JobsList from "../../components/JobsList/JobsList";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";

import { getAllJobsStart } from "../../app/actions";
import Loader from "../../components/Loader/Loader";

const Home = (props) => {
  console.log("xoxo-props", props);
  const {
    getAllJobsStart,
    jobs: { jobs, isLoading },
  } = props;

  useEffect(() => {
    getAllJobsStart({ category: "Software Development" });
  }, []);
  console.log("home-props", props);
  return (
    <div>
      <div className="max-w-5xl m-auto px-4 lg:px-0 py-8 md:py-16">
        <div className="">
          <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-semiBold leading-snug">
            Discover the best remote jobs <br></br> to work from home.
          </h1>
          <p className="text-lg mt-3 text-gray-500">Browse thousands of remote job listings to work at startups and leading companies.</p>
        </div>
        <SearchBar />
        {isLoading ? (
          <div className="items-center text-center mt-4">
            <Loader />
          </div>
        ) : (
          <div>
            <JobsList />
            {/* <Pagination /> */}
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  jobs: state.jobs,
});

const mapDispatchToProps = (dispatch) => ({
  getAllJobsStart: (data) => dispatch(getAllJobsStart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
