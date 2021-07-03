import React, { useState } from "react";
import { connect } from "react-redux";
import Loader from "../Loader/Loader";

import { makeStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const useStyles = makeStyles(() => ({
  jobDetailDialog: {
    minWidth: "700px",
    borderRadius: "0",
    border: "2px solid black",
  },
}));

const JobsList = (props) => {
  const classes = useStyles();
  const { isLogin } = props;
  const [jobDetailsDialog, setJobDetailDialog] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    vertical: "bottom",
    horizontal: "right",
    message: "",
    warning: "success",
  });

  const handleOpenJobDetailDialog = () => {
    setJobDetailDialog(true);
  };
  const handleCloseJobDetailDialog = () => {
    setJobDetailDialog(false);
  };

  const handleClickSavedJob = () => {
    console.log("save job");
    if (!isLogin) {
      setSnackbar({ ...snackbar, open: true, message: "Please Login", warning: "info" });
      setTimeout(() => {
        setSnackbar({ ...snackbar, open: false });
      }, 2000);
    }
  };

  return (
    <div className="mt-5">
      <div className="xl:flex xl:items-center xl:justify-between space-y-3 xl:space-y-0 py-6 xl:py-8 border-gray-300 bg-white px-4 border-t-2 border-b-2">
        <div className="xl:flex xl:items-center xl:space-x-7 space-y-3 xl:space-y-0">
          <div>
            <img className="w-28" src="https://workablehr.s3.amazonaws.com/uploads/account/logo/37805/verve.png" alt="" />
          </div>
          <div>
            <h1 className="font-medium text-lg xl:text-xl">Shift Lead (University - Palo Alto)</h1>
            <p className="text-base xl:text-base text-gray-500">at Verve Coffee Roasters</p>
            <div className="space-y-1 mt-1 text-gray-500">
              <div className="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                    <path
                      d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0025.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="32"
                    />
                    <circle cx="256" cy="192" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" />
                  </svg>
                </div>
                <span className="text-sm">Phoenix, Arizona, United States Operations</span>
              </div>
              <div className="flex items-center space-x-2">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                    <title>Time</title>
                    <path
                      d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64z"
                      fill="none"
                      stroke="currentColor"
                      stroke-miterlimit="10"
                      stroke-width="32"
                    />
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M256 128v144h96" />
                  </svg>
                </div>
                <span className="text-sm">Posted Today</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button onClick={handleClickSavedJob} className="outline-none focus:outline-none">
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
          <button onClick={handleOpenJobDetailDialog} className="text-sm font-medium uppercase mt-1 outline-none focus:outline-none">
            View
          </button>
        </div>
      </div>

      <Dialog classes={{ paper: classes.jobDetailDialog }} onClose={handleCloseJobDetailDialog} aria-labelledby="simple-dialog-title" open={jobDetailsDialog}>
        <div className="py-4 px-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-2">
              <div>
                <img className="w-24" src="https://s3.remote.io/img/company/625264839.png" alt="" />
              </div>
              <div>
                <h1 className="text-2xl font-semiBold">DevOps Engineer</h1>
                <p className="text-xl text-gray-500">BoomTown</p>
                <div className="space-x-2 mt-1">
                  <span className="px-2 py-1 text-xs border border-gray-600 rounded-md uppercase bg-gray-100 font-medium">Devops</span>
                  <span className="px-2 py-1 text-xs border border-gray-600 rounded-md uppercase bg-gray-100 font-medium">Gitlab</span>
                  <span className="px-2 py-1 text-xs border border-gray-600 rounded-md uppercase bg-gray-100 font-medium">Chef</span>
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
            <p>
              SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are
              not. Today SpaceX is actively developing the technologies to make this possible, with the ultimate goal of enabling human life on Mars.
              <br />
              <br />
              <strong>
                SOFTWARE ENGINEER (GROUND OPERATIONS)
                <br />
                <br />
              </strong>
              As a Software Engineer on the Ground Software Operations team, you will develop, analyze and verify the mission critical software used to control
              and monitor our rockets on the launchpad. You will be responsible for ensuring the software behaves as expected, and troubleshoot when necessary.
              You will have a direct impact on our ability to launch rockets frequently, safely, and reliably.
              <br />
              <br />
              <strong>
                RESPONSIBILITIES:
                <br />
                <br />
              </strong>
            </p>{" "}
            <ul>
              {" "}
              <ul>
                {" "}
                <li>Develop, execute, and analyze the software configuration of ground software systems</li>{" "}
                <li>
                  Invent new tools that enable more frequent and reliable software deployment, automated data review, and automated configuration verification
                </li>{" "}
                <li>Support existing ground software deployments to launch, production, and test sites</li>{" "}
                <li>Analyze test results and bugs that require in-depth investigations</li>{" "}
                <li>Hands-on integration and troubleshooting of ground hardware/software systems</li> <li>Manage support queues and ticketing system triage</li>{" "}
                <li>Work closely with the ground software development team to roll out new software changes</li>{" "}
                <li>Occasional travel to launch sites and customer sites for testing and/or operations</li>{" "}
              </ul>{" "}
            </ul>{" "}
            <p>
              <br />
              <strong>
                BASIC QUALIFICATIONS:
                <br />
                <br />
              </strong>
            </p>{" "}
            <ul>
              {" "}
              <ul>
                {" "}
                <li>
                  Bachelor's degree in computer science, engineering, math, or science discipline OR 2+ years of experience in software development without a
                  degree
                </li>{" "}
                <li>Development experience with LabVIEW or Python</li>{" "}
              </ul>{" "}
            </ul>{" "}
            <p>
              <br />
              <strong>
                PREFERRED SKILLS AND EXPERIENCE:
                <br />
                <br />
              </strong>
            </p>{" "}
            <ul>
              {" "}
              <ul>
                {" "}
                <li>3+ years of experience in software development, operations, and/or support</li>{" "}
                <li>Enjoys end-user facing roles for support and interfacing with cross-functional teams</li>{" "}
                <li>Certified LabVIEW Associate Developer (CLAD)</li> <li>Experience with other software or scripting languages</li>{" "}
              </ul>{" "}
            </ul>{" "}
            <p>
              <br />
              <strong>
                ADDITIONAL REQUIREMENTS:
                <br />
                <br />
              </strong>
            </p>{" "}
            <ul>
              {" "}
              <ul>
                {" "}
                <li>Must be available to work extended hours and weekends when needed to meet critical deadlines</li>{" "}
              </ul>{" "}
            </ul>{" "}
            <p>
              <br />
              <strong>
                ITAR REQUIREMENTS:
                <br />
                <br />
              </strong>
            </p>{" "}
            <ul>
              {" "}
              <ul>
                {" "}
                <li>
                  To conform to U.S. Government space technology export regulations, including the International Traffic in Arms Regulations (ITAR) you must be
                  a U.S. citizen, lawful permanent resident of the U.S., protected individual as defined by 8 U.S.C. 1324b(a)(3), or eligible to obtain the
                  required authorizations from the U.S. Department of State. Learn more about the ITAR here.
                </li>{" "}
              </ul>{" "}
            </ul>{" "}
            <p>
              <br />
              SpaceX is an Equal Opportunity Employer; employment with SpaceX is governed on the basis of merit, competence and qualifications and will not be
              influenced in any manner by race, color, religion, gender, national origin/ethnicity, veteran status, disability status, age, sexual orientation,
              gender identity, marital status, mental or physical disability or any other legally protected status.
              <br />
              <br />
              Applicants wishing to view a copy of SpaceX's Affirmative Action Plan for veterans and individuals with disabilities, or applicants requiring
              reasonable accommodation to the application/interview process should notify the Human Resources Department at (310) 363-6000.
            </p>
          </div>
          <div className="mt-4">
            <textarea
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
              <button className="w-full sm:w-auto flex-none bg-black hover:bg-blue-700 text-white leading-6 font-semibold py-2 px-4 border border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 focus:outline-none transition-colors duration-200">
                Send application
              </button>
            </div>
          </div>
        </div>
      </Dialog>

      <Snackbar
        autoHideDuration={2000}
        anchorOrigin={{ vertical: snackbar.vertical, horizontal: snackbar.horizontal }}
        open={snackbar.open}
        // onClose={handleClose}
        key={snackbar.vertical + snackbar.horizontal}
      >
        <div className="py-2 px-2 bg-white border-2 border-black">{snackbar.message}</div>
      </Snackbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLogin: state.auth.isLogin,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(JobsList);
