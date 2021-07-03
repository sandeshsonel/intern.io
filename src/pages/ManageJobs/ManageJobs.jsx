import React, { useEffect } from "react";
import { connect } from "react-redux";

import { getAllCompanyJobs } from "../../app/actions";
import Loader from "../../components/Loader/Loader";
import ManageJobTable from "../../components/ManageJobTable/ManageJobTable";

const ManageJobs = (props) => {
  const { isLoading, companyJobs, getAllCompanyJobs } = props;
  console.log(props);

  useEffect(() => {
    getAllCompanyJobs();
    console.log("run useEffect");
  }, []);

  return (
    <div>
      {isLoading ? (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
          <Loader />
        </div>
      ) : (
        <ManageJobTable companyJobs={companyJobs} />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  companyJobs: state.companyJobs.companyJobs,
  isLoading: state.companyJobs.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCompanyJobs: () => dispatch(getAllCompanyJobs()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageJobs);
