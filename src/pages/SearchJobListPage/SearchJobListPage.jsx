import React from "react";
import SearchBar from "../../components/SearchBar/SearchBar";

const SearchJobListPage = (props) => {
  console.log("xoxo", props);
  return (
    <div className="max-w-5xl m-auto px-3 xl:px-0">
      <div>
        <h1></h1>
        <SearchBar searchJobListPage={true} />
        <div></div>
      </div>
    </div>
  );
};

export default SearchJobListPage;
