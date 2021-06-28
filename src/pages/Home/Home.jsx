import React from "react";
import JobsList from "../../components/JobsList/JobsList";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  return (
    <div>
      <div>
        <SearchBar />
        {/* <JobsList />
        <Pagination /> */}
        <Loader />
      </div>
    </div>
  );
};

export default Home;
