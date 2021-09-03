import React from "react";
import PaginationComponent from "@material-ui/lab/Pagination";

const Pagination = () => {
  const goToNextPage = () => {};

  const goToPreviousPage = () => {};
  return (
    <div className="flex items-center justify-center mt-5">
      <PaginationComponent count={10} shape="rounded" size="medium" />
    </div>
  );
};

export default Pagination;
