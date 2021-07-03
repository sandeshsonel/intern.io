import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Interweave from "interweave";
import moment from "moment";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles } from "@material-ui/core";
import ManageJobTableDetails from "../ManageJobTableDetails/ManageJobTableDetails";

import { deleteCompanyJob } from "../../app/actions";

const useStyles = makeStyles(() => ({
  paper: { minWidth: "600px" },
}));

const ManageJobTable = (props) => {
  const classes = useStyles();
  const { deleteCompanyJob, companyJobs } = props;
  const [selectCompanyJob, setSelectCompanyJob] = useState(null);
  const [dialog, setDialog] = useState(false);
  const [checkDialog, setCheckDialog] = useState("");

  const handleOpenDialog = () => {
    setDialog(true);
  };
  const handleCloseDialog = () => {
    setDialog(false);
  };

  const handleDeleteJob = () => {
    deleteCompanyJob(selectCompanyJob._id);
    setDialog(false);
  };

  if (!companyJobs.length) {
    return (
      <div className="text-center" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <Link to="/post">
          <button className="border border-black px-2 py-2 shadow-md">Post Job</button>
        </Link>
      </div>
    );
  }

  const displayParagraph = (para) => {
    let result = para.substring(1, para.length - 1);
    console.log(result);
    return <div>{result}</div>;
  };

  console.log(selectCompanyJob);
  return (
    <div class="overflow-x-auto">
      <div class="flex items-center justify-center overflow-hidden">
        <div class="w-full ">
          <div class="bg-white shadow-md rounded my-6">
            <table class="w-full table-auto">
              <thead>
                <tr class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th class="py-3 px-6 text-left">Company</th>
                  <th class="py-3 px-6 text-left">Position</th>
                  <th class="py-3 px-6 text-left">Category</th>
                  <th class="py-3 px-6 text-center">Location</th>
                  <th class="py-3 px-6 text-center">Posted</th>
                  <th class="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody class="text-gray-600 text-sm font-light">
                {companyJobs.map((comp, idx) => (
                  <tr key={idx} class="border-b border-gray-200 hover:bg-gray-100">
                    <td class="py-3 px-6 text-left whitespace-nowrap">
                      <span class="font-medium">{comp.jobCompany}</span>
                    </td>
                    <td class="py-3 px-6 text-left">
                      <span>{comp.jobPosition}</span>
                    </td>
                    <td class="py-3 px-6 text-left">
                      <span>{comp.jobCategory}</span>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <span>{comp.jobLocation}</span>
                    </td>
                    <td class="py-3 px-6 text-center whitespace-nowrap">
                      <span class="font-medium">{moment(comp.createdAt).format("dddd")}</span>
                    </td>
                    <td class="py-3 px-6 text-center">
                      <div class="flex item-center justify-center">
                        <button
                          onClick={() => {
                            setSelectCompanyJob(comp);
                            setDialog(true);
                            setCheckDialog("seen");
                          }}
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => {
                            setSelectCompanyJob(comp);
                            setDialog(true);
                            setCheckDialog("edit");
                          }}
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={() => {
                            setSelectCompanyJob(comp);
                            setDialog(true);
                            setCheckDialog("delete");
                          }}
                          class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Dialog
        classes={checkDialog === "edit" ? { paper: classes.paper } : null}
        onClose={handleCloseDialog}
        aria-labelledby="simple-dialog-title"
        open={dialog}
      >
        {checkDialog === "seen" ? (
          <div className="px-4 py-4">
            <div className="flex items-center space-x-3">
              <div>
                <img className="w-24" src={selectCompanyJob.companyLogoUrl} alt="" />
              </div>
              <div>
                <h1 className="text-2xl font-semiBold">{selectCompanyJob.jobCategory}</h1>
                <p className="text-xl font-semiBold text-gray-500">{selectCompanyJob.jobCompany}</p>
                <div className="flex items-center space-x-2 mt-2">
                  {selectCompanyJob.jobTags.map((tag) => (
                    <span className="px-2 py-1 rounded-md text-sm border-2 border-gray-500 font-semiBold">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="text-xl font-semiBold">Remote job description</h1>
              <Interweave content={selectCompanyJob.jobDescription} />
            </div>
          </div>
        ) : checkDialog === "edit" ? (
          <div className="px-4 py-4">
            <div>Edit Company</div>
            <div className="flex items-center space-x-3">
              <div>
                <img className="w-20 rounded-full" src={selectCompanyJob.companyLogoUrl} alt="" />
              </div>
              <div className="w-full">
                <input
                  className="w-full mt-1 border-2 outline-none focus:border-black focus:outline-none transition-colors duration-200 py-3 px-3"
                  type="text"
                  defaultValue={selectCompanyJob.companyLogoUrl}
                />
              </div>
            </div>
            <div className="flex items-center py-3">
              <button className="w-full py-2">Cancel</button>
              <button className="w-full py-2">Update</button>
            </div>
          </div>
        ) : (
          <div className="px-4 py-3 space-x-4">
            {/* <h1>Confirm Delete Job</h1> */}
            <button onClick={() => setDialog(false)} className="py-2 px-5 border-2">
              Cancel
            </button>
            <button onClick={handleDeleteJob} className="py-2 px-5 bg-red-600 text-white font-semiBold">
              Delete
            </button>
          </div>
        )}
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteCompanyJob: (deleteJobId) => dispatch(deleteCompanyJob(deleteJobId)),
});

export default connect(null, mapDispatchToProps)(ManageJobTable);
