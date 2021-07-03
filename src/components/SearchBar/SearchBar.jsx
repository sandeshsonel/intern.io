import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { jobCategory } from "../../assets/data/dummy";
import SearchSuggestion from "../SearchSuggestion/SearchSuggestion";

import { getAllJobsStart } from "../../app/actions";

const SearchBar = (props) => {
  let history = useHistory();
  const { getAllJobsStart, searchJobListPage } = props;
  const [inputFocused, setInputFocused] = useState(false);
  const [searchSuggestionVisible, setSearchSuggestion] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("");

  const onFocus = () => setInputFocused(true);
  const onBlur = () => setInputFocused(false);

  // useEffect(() => {
  //   console.log("call");
  //   if (category) {
  //     getJobsByQueryStart({ searchInput, category });
  //     history.push(
  //       // `/${category
  //       //   .replace(/[^a-zA-Z ]/g, "")
  //       //   .replace(/\s/g, "")
  //       //   .trim()
  //       //   .toLowerCase()}${searchInput.length ? `?s=${searchInput}` : ""}`
  //       category
  //     );
  //   }
  // }, [category]);

  const handleSearch = () => {
    // history.push(`/${category.toLowerCase()}?=${searchInput}`);
    if (searchInput.length || category !== "") getAllJobsStart({ searchInput, category });
    setCategory("");
    setSearchInput("");
  };

  const handleCategory = (e) => {
    console.log("xoxo-e", e.target.value);
    setCategory(e.target.value);
    getAllJobsStart({ searchInput, category: e.target.value });
    setCategory("");
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchInput.length > 3) {
      console.log("do validate");
      getAllJobsStart({ searchInput, category: category });
      setSearchInput("");
    }
  };

  console.log("popo", props, searchJobListPage);

  return (
    <div className="md:flex lg:flex xl:flex w-full xl:space-x-4 lg:space-x-3 md:space-x-2 lg:space-y-0 md:space-y-0 space-y-2 md:mt-8 mt-6">
      <div className="w-full relative">
        <div
          className={`flex items-center bg-white px-3 xl:px-4 w-full ${inputFocused ? "border-2 border-blue-600 focus:ring-2" : "border-2 border-gray-300"}`}
        >
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 lg:w-5" viewBox="0 0 512 512">
              <path
                d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
                fill="none"
                stroke="currentColor"
                stroke-miterlimit="10"
                stroke-width="32"
              />
              <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M338.29 338.29L448 448" />
            </svg>
          </div>
          <input
            className="outline-none cursor-pointer focus:outline-none lg:text-lg py-2 md:py-3 md:px-3 lg:py-4 lg:px-4 px-2 placeholder-gray-700 w-full"
            type="text"
            placeholder="e.g. Job title, keywords or company"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}
            required
          />
          {searchInput && (
            <button onClick={() => setSearchInput("")} className="outline-none focus:outline-none px-1 py-1 bg-gray-200 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M368 368L144 144M368 144L144 368" />
              </svg>
            </button>
          )}
        </div>
        {/* <SearchSuggestion /> */}
      </div>

      <div className="relative bg-white border-2 border-gray-300">
        <select
          className="w-full md:w-60 lg:w-64 xl:w-64 py-2 bg-white md:py-3 lg:py-4 xl:py-4 px-3 xl:px-4 cursor-pointer pr-8 appearance-none placeholder-gray-400 lg:text-lg outline-none focus:outline-none focus:ring-2 focus:ring-blue-600"
          name=""
          id=""
          value={category}
          onChange={handleCategory}
        >
          {jobCategory.map((cat, idx) => (
            <option defaultValue={category} key={idx} selected={cat === "All categories"} disabled={cat === "All Category"} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
      <button
        onClick={handleSearch}
        className="w-full md:w-auto lg:w-auto xl:w-auto px-8 py-2 lg:py-0 bg-black text-white outline-none focus:outline-none hover:bg-blue-600"
      >
        Search
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getAllJobsStart: (data) => dispatch(getAllJobsStart(data)),
});

export default connect(null, mapDispatchToProps)(SearchBar);
