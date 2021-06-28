import React, { useState, useRef, useEffect } from "react";

const SearchSuggestion = () => {
  const [searchSugVisible, setSearchSugVisible] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setSearchSugVisible(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  });
  return (
    <div className="absolute z-10 w-full bg-white shadow mt-2">
      <div className="flex items-center space-x-2 py-4 px-4 border-b hover:bg-gray-50 cursor-pointer">
        <p className="">Full Stack Developer</p>
      </div>
    </div>
  );
};

export default SearchSuggestion;
