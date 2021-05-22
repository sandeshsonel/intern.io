import React from "react";
import JobsList from "../../components/JobsList/JobsList";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  return (
    <div>
      <div>
        <SearchBar />
        <JobsList />
        <Pagination />
      </div>
    </div>
  );
};

export default Home;
