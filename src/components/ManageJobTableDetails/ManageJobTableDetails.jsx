import React from "react";
import PostJobs from "../../pages/PostJobs/PostJobs";

const ManageJobTableDetails = (props) => {
  console.log("child", props);
  return (
    <div>
      <PostJobs />
    </div>
  );
};

export default ManageJobTableDetails;
