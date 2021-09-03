import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "../Loader/Loader";

import { makeStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import Snackbar from "@material-ui/core/Snackbar";
import Drawer from "@material-ui/core/Drawer";
import Alert from "@material-ui/lab/Alert";
import moment from "moment";
import Interweave from "interweave";

const useStyles = makeStyles(() => ({
  jobDetailDialog: {
    minWidth: "700px",
    borderRadius: "0",
    border: "2px solid black",
  },
}));

const JobsList = (props) => {
  const classes = useStyles();
  const { isLogin, jobs } = props;
  console.log("xoxo", jobs);
  const [jobDetailsDialog, setJobDetailDialog] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "right",
    message: "",
    warning: "success",
  });
  const [coverLetter, setCoverLetter] = useState("");
  const [error, setError] = useState({
    open: false,
    message: "",
  });
  const [jobsDetailsDrawer, setJobsDetailsDrawer] = useState({ right: false });
  const [selectJob, setSelectJob] = useState({});

  const handleOpenJobDetailDialog = (userId, companyJobsDetails) => {
    setSelectJob({ userId, companyJobsDetails });
    setJobDetailDialog(true);
  };
  const handleCloseJobDetailDialog = () => {
    setJobDetailDialog(false);
  };

  const handleClickSavedJob = (userId, companyJobId) => {
    console.log("save job");
    if (!isLogin) {
      setSnackbar({
        ...snackbar,
        open: true,
        message: "Please Login",
        warning: "info",
      });
      setTimeout(() => {
        setSnackbar({ ...snackbar, open: false });
      }, 2000);
    } else {
      console.log("pooo", userId, companyJobId);
    }
  };
  const toggleOpenJobsDetailsDrawer =
    (userId, companyJobsDetails) => (event) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setSelectJob({ userId, companyJobsDetails });
      setJobsDetailsDrawer({ right: true });
    };
  const toggleCloseJobsDetailsDrawer = () => {
    setJobsDetailsDrawer({ right: false });
  };

  const handleSendJobApplication = () => {};

  console.log("xxx", selectJob);

  return (
    <div className="mt-5 space-y-4">
      {jobs.map(({ userId, companyJobsDetails }) => (
        <div
          onClick={toggleOpenJobsDetailsDrawer(userId, companyJobsDetails)}
          className="xl:flex xl:items-center xl:justify-between py-4 border-gray-300 bg-white px-4 border-2 hover:border-gray-500 hover:shadow-md cursor-pointer"
        >
          <div className="xl:flex xl:items-center xl:space-x-7 space-y-3 xl:space-y-0">
            <div>
              <img
                className="w-14 xl:w-24 rounded-md"
                src={companyJobsDetails.companyLogoUrl}
                alt=""
              />
            </div>
            <div>
              <h1 className="font-medium text-lg xl:text-xl">
                {companyJobsDetails.jobPosition}
              </h1>
              <p className="text-base xl:text-base text-gray-500">
                {companyJobsDetails.jobCompany}
              </p>
              <div className="space-y-1 mt-1 text-gray-500">
                <div className="flex items-center space-x-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                      />
                      <circle
                        cx="256"
                        cy="192"
                        r="48"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">
                    {companyJobsDetails.jobLocation}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-4"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
                        fill="none"
                        stroke="currentColor"
                        stroke-miterlimit="10"
                        stroke-width="32"
                      />
                      <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M256 128v144h96"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">
                    Posted {moment(companyJobsDetails.createdAt).format("dddd")}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 py-2">
            {companyJobsDetails.jobTags.map((tag) => (
              <div className="text-sm px-2 py-1 bg-gray-100">{tag}</div>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() =>
                handleClickSavedJob(userId, companyJobsDetails._id)
              }
              className=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5"
                viewBox="0 0 512 512"
              >
                <path
                  d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                  fill="none"
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="32"
                />
              </svg>
            </button>
            <button
              onClick={
                toggleOpenJobsDetailsDrawer(userId, companyJobsDetails)
                // setSelectJob({ userId, companyJobsDetails });
              }
              // onClick={() => handleOpenJobDetailDialog(userId, companyJobsDetails)}
              className="text-sm font-medium uppercase mt-1 outline-none focus:outline-none"
            >
              View
            </button>
          </div>
        </div>
      ))}

      {Object.keys(selectJob).length > 0 && (
        <Drawer
          anchor="right"
          open={jobsDetailsDrawer["right"]}
          onClose={toggleCloseJobsDetailsDrawer}
        >
          <div className="py-4 px-4 max-w-4xl m-auto">
            <div className="flex items-start justify-between">
              <div className="flex items-center space-x-2">
                <div>
                  {selectJob.companyJobsDetails.companyLogoUrl && (
                    <img
                      className="w-24"
                      src={selectJob.companyJobsDetails.companyLogoUrl}
                      alt=""
                    />
                  )}
                </div>
                <div>
                  <h1 className="text-2xl font-semiBold">
                    {selectJob.companyJobsDetails.jobPosition}
                  </h1>
                  <p className="text-xl text-gray-500">
                    {selectJob.companyJobsDetails.jobCompany}
                  </p>
                  <div className="space-x-2 mt-1">
                    {selectJob.companyJobsDetails.jobTags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs border border-gray-600 rounded-md uppercase bg-gray-100 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="py-2 flex space-x-2">
                <button className="px-1 py-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5"
                    viewBox="0 0 512 512"
                  >
                    <path
                      d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className=" ">
              <h1>Job description</h1>
              <Interweave
                content={selectJob.companyJobsDetails.jobDescription}
              />
            </div>
            <div className="mt-4">
              <textarea
                value={coverLetter}
                onChange={(e) => setCoverLetter(e.target.value)}
                className="w-full px-3 py-3 outline-none border-2 focus:border-black focus:outline-none transition-colors duration-200"
                placeholder="Write a cover letter"
                name=""
                id=""
                cols="30"
                rows="5"
              ></textarea>
              <div className="float-right flex space-x-3 mt-2">
                <button
                  onClick={toggleCloseJobsDetailsDrawer}
                  className="py-2 px-4 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSendJobApplication}
                  className="w-full sm:w-auto flex-none bg-black hover:bg-blue-700 text-white leading-6 font-semibold py-2 px-4 border border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 focus:outline-none transition-colors duration-200"
                >
                  Send application
                </button>
              </div>
            </div>
          </div>
        </Drawer>
      )}

      {/* <Dialog
        fullScreen
        // classes={{ paper: classes.jobDetailDialog }}
        onClose={handleCloseJobDetailDialog}
        aria-labelledby="simple-dialog-title"
        open={jobDetailsDialog}
      >
        <div className="py-4 px-4 max-w-4xl m-auto">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2">
              <div>{selectJob.companyJobsDetails?.companyLogoUrl && <img className="w-24" src={selectJob.companyJobsDetails.companyLogoUrl} alt="" />}</div>
              <div>
                {selectJob.companyJobsDetails.jobPosition && <h1 className="text-2xl font-semiBold">{selectJob.companyJobsDetails.jobPosition}</h1>}
                <p className="text-xl text-gray-500">{selectJob.companyJobsDetails.jobCompany}</p>
                <div className="space-x-2 mt-1">
                  {selectJob.companyJobsDetails.jobTags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs border border-gray-600 rounded-md uppercase bg-gray-100 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="py-2 flex space-x-2">
              <button className="px-1 py-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 512 512">
                  <path
                    d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
                    fill="none"
                    stroke="currentColor"
                    stroke-linejoin="round"
                    stroke-width="32"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className=" ">
            <h1>Job description</h1>
            <Interweave content={selectJob.companyJobsDetails.jobDescription} />
          </div>
          <div className="mt-4">
            <textarea
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              className="w-full px-3 py-3 outline-none border-2 focus:border-black focus:outline-none transition-colors duration-200"
              placeholder="Write a cover letter"
              name=""
              id=""
              cols="30"
              rows="5"
            ></textarea>
            <div className="float-right flex space-x-3 mt-2">
              <button
                onClick={handleCloseJobDetailDialog}
                className="py-2 px-4 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSendJobApplication}
                className="w-full sm:w-auto flex-none bg-black hover:bg-blue-700 text-white leading-6 font-semibold py-2 px-4 border border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 focus:outline-none transition-colors duration-200"
              >
                Send application
              </button>
            </div>
          </div>
        </div>
      </Dialog> */}

      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{
          vertical: snackbar.vertical,
          horizontal: snackbar.horizontal,
        }}
        open={snackbar.open}
        // onClose={handleClose}
        key={snackbar.vertical + snackbar.horizontal}
      >
        <div className="py-2 px-2 bg-white border-2 border-black">
          {snackbar.message}
        </div>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(JobsList);
