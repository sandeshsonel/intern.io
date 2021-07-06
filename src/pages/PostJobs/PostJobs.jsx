import React, { useState } from "react";
import { connect } from "react-redux";
import { Editor } from "@tinymce/tinymce-react";
import { jobCategory, currency } from "../../assets/data/dummy";

import { addCompanyJobStart } from "../../app/actions/companyJobs.action";

const PostJobs = (props) => {
  const { addCompanyJob, isLoading } = props;
  const [skills, setSkills] = useState([]);
  const [inputSkill, setInputSkill] = useState("");
  const [jobsDetails, setJobDetails] = useState({
    jobPosition: "",
    jobCompany: "",
    jobLocation: "",
    jobCategory: "",
    jobTags: [],
    jobDescription: "",
    maxSalary: "",
    minSalary: "",
    currency: "USD",
    salaryInterval: "annual",
    jobUrl: "",
    jobToEmail: "",
    companyLogoUrl: "",
    companyTwitter: "",
    companyEmail: "",
  });

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputSkill.length > 0) {
      console.log("do validate");
      const exists = jobsDetails.jobTags.find((skill) => skill === inputSkill);
      if (!exists && jobsDetails.jobTags.length !== 5) {
        setJobDetails({ ...jobsDetails, jobTags: [...jobsDetails.jobTags, inputSkill] });
      }
      setInputSkill("");
    }
  };

  const handleAddSkill = () => {
    const exists = jobsDetails.jobTags.find((skill) => skill === inputSkill);
    if (!exists && jobsDetails.jobTags.length !== 5 && inputSkill.length > 0) {
      setJobDetails({ ...jobsDetails, jobTags: [...jobsDetails.jobTags, inputSkill] });
      setInputSkill("");
    }
    console.log("exists", exists);
  };

  const handleEditorChange = (e) => {
    console.log("Content was updated:", e.target.getContent());
    setJobDetails({ ...jobsDetails, jobDescription: e.target.getContent() });
  };

  const handleSubmitJobPost = () => {
    addCompanyJob(jobsDetails);
  };

  console.log(props, jobsDetails);
  return (
    <div className="max-w-5xl m-auto">
      <div className="px-3 py-3 border shadow-md mt-4 mb-4">
        <div className="space-y-6">
          <div>
            <label htmlFor="">Upload Company logo</label>
            <input
              value={jobsDetails.companyLogoUrl}
              onChange={(e) => setJobDetails({ ...jobsDetails, companyLogoUrl: e.target.value })}
              className="w-full mt-1 border-2 outline-none focus:border-black focus:outline-none transition-colors duration-200 py-3 px-3"
              type="text"
              placeholder="Company logo URL"
            />
          </div>
          <div>
            <div className="flex items-center space-x-4">
              <div className="w-full">
                <label htmlFor="">Company Twitter</label>
                <input
                  value={jobsDetails.companyTwitter}
                  onChange={(e) => setJobDetails({ ...jobsDetails, companyTwitter: e.target.value })}
                  className="w-full mt-1 border-2 outline-none focus:border-black focus:outline-none transition-colors duration-200 py-3 px-3"
                  type="text"
                  placeholder="https://twitter.com/remoteio_jobs"
                />
              </div>
              <div className="w-full">
                <label htmlFor="">Company contact email</label>
                <input
                  value={jobsDetails.companyEmail}
                  onChange={(e) => setJobDetails({ ...jobsDetails, companyEmail: e.target.value })}
                  className="w-full mt-1 border-2 outline-none focus:border-black focus:outline-none transition-colors duration-200 py-3 px-3"
                  type="text"
                  placeholder="Company email"
                />
              </div>
            </div>
            {/* <div>
              <div>
                <label htmlFor=""></label>
              </div>
            </div> */}
          </div>
        </div>
        <div className="border-b py-2">
          <h1>Job details</h1>
        </div>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-full">
              <label htmlFor="">Position</label>
              <input
                value={jobsDetails.jobPosition}
                onChange={(e) => setJobDetails({ ...jobsDetails, jobPosition: e.target.value })}
                className="w-full mt-1 border-2 outline-none focus:border-black focus:outline-none transition-colors duration-200 py-3 px-3"
                type="text"
                placeholder="Web Developer"
              />
            </div>
            <div className="w-full">
              <label htmlFor="">Company Name</label>
              <input
                value={jobsDetails.jobCompany}
                onChange={(e) => setJobDetails({ ...jobsDetails, jobCompany: e.target.value })}
                className="w-full mt-1 border-2 outline-none focus:border-black focus:outline-none transition-colors duration-200 py-3 px-3"
                type="text"
                placeholder="Acme Inc."
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="">Location(s) allowed</label>
            <input
              value={jobsDetails.jobLocation}
              onChange={(e) => setJobDetails({ ...jobsDetails, jobLocation: e.target.value })}
              className="w-full mt-1 border-2 outline-none focus:border-black focus:outline-none transition-colors duration-200 py-3 px-3"
              type="text"
              placeholder="Anywhere"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="">Job category</label>

            <div className="flex items-center justify-between mt-1 relative border">
              <select
                onChange={(e) => setJobDetails({ ...jobsDetails, jobCategory: e.target.value })}
                className="w-full outline-none appearance-none focus:outline-none py-3 px-3"
                name=""
                id=""
              >
                {jobCategory.map((cat, idx) => (
                  <option key={idx} value={cat.value}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="">Industry / job tags (5 max)</label>

            <div className="px-2 py-2 mt-1 flex items-center border-2 border-black">
              <input
                onChange={(e) => setInputSkill(e.target.value)}
                onKeyDown={handleKeyDown}
                value={inputSkill}
                className="w-full px-2 outline-none focus:outline-none"
                type="text"
                placeholder="e.g. javascript"
              />
              <button onClick={handleAddSkill} className="px-1 py-1 bg-blue-600 text-white">
                Add
              </button>
            </div>
            {jobsDetails.jobTags.length > 0 && (
              <div className="flex items-center space-x-2 mt-3 mb-3">
                {jobsDetails.jobTags.map((skill, idx) => (
                  <button
                    key={idx}
                    onClick={() => setJobDetails({ ...jobsDetails, jobTags: jobsDetails.jobTags.filter((job) => job !== skill) })}
                    className="flex items-center space-x-1 px-2 py-2 bg-gray-200 rounded focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-900 focus:outline-none transition-colors duration-200"
                  >
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-4" viewBox="0 0 512 512">
                        <path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z" />
                      </svg>
                    </div>
                    <div className="text-sm">{skill}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center space-x-3 mt-4">
            <div>
              <label htmlFor="">Minimum salary</label>
              <input
                value={jobsDetails.minSalary}
                onChange={(e) => setJobDetails({ ...jobsDetails, minSalary: e.target.value })}
                className="w-full mt-1 py-3 border-2 border-black px-3 outline-none focus:outline-none"
                type="text"
                placeholder="45,000"
              />
            </div>
            <div>
              <label htmlFor="">Maximum salary</label>
              <input
                value={jobsDetails.maxSalary}
                onChange={(e) => setJobDetails({ ...jobsDetails, maxSalary: e.target.value })}
                className="w-full mt-1 py-3 border-2 border-black px-3 outline-none focus:outline-none"
                type="text"
                placeholder="65,200"
              />
            </div>
            <div>
              <label htmlFor="">Currency</label>
              <div className="relative mt-1 bg-white border-2 border-black">
                <select
                  className="w-full md:w-60 lg:w-64 xl:w-64 py-3 px-2 bg-white cursor-pointer pr-8 appearance-none placeholder-gray-400 outline-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                  name=""
                  id=""
                >
                  {currency.map((cur, idx) => (
                    <option key={idx} value={cur}>
                      {cur}
                    </option>
                  ))}
                </select>

                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="">Salary interval</label>
              <div className="relative mt-1 bg-white border-2 border-gray-400">
                <select
                  onChange={(e) => setJobDetails({ ...jobsDetails, salaryInterval: e.target.value })}
                  className="w-full md:w-60 lg:w-64 xl:w-64 py-3 px-2 bg-white cursor-pointer pr-8 appearance-none placeholder-gray-400 outline-none focus:outline-none focus:ring-2 focus:ring-blue-600"
                  name=""
                  id=""
                >
                  <option value="annual">Annual</option>
                  <option value="hourly">Hourly</option>
                  <option value="monthly">Monthly</option>
                </select>

                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg class="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="">Job description</label>
            <div className="mt-1">
              <Editor
                apiKey="ha1708za8olzelwo6s5dverevn10h7y5qei3h1p0sys0twgw"
                init={{
                  height: 300,
                  menubar: false,
                  placeholder: "Seeing web developer familiar with all known coding languages",
                  plugins: [
                    "advlist autolink lists link image",
                    "charmap print preview anchor help",
                    "searchreplace visualblocks code",
                    "insertdatetime media table paste wordcount",
                  ],
                  toolbar:
                    "undo redo | formatselect | bold italic | \
            alignleft aligncenter alignright | \
            bullist numlist outdent indent | help",
                }}
                onChange={handleEditorChange}
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="">Application URL</label>
            <input
              value={jobsDetails.applicationUrl}
              onChange={(e) => setJobDetails({ ...jobsDetails, applicationUrl: e.target.value })}
              className="w-full px-3 py-3 mt-1 border-2 border-black outline-none focus:outline-none"
              type="url"
              placeholder="https://mycompany.com/applicants/job/28"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="">Apply-to email</label>
            <input
              value={jobsDetails.applyToEmail}
              onChange={(e) => setJobDetails({ ...jobsDetails, applyToEmail: e.target.value })}
              className="w-full px-3 py-3 border-2 border-black outline-none focus:outline-none"
              type="email"
              placeholder="hr@acme.com"
            />
          </div>
        </div>

        <button disabled={isLoading} onClick={handleSubmitJobPost} className={`w-full py-3 mt-2 text-white ${isLoading ? "bg-gray-400" : "bg-black"}`}>
          {isLoading ? "Loading..." : "Post a job"}
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.companyJobs.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  addCompanyJob: (jobDetails) => dispatch(addCompanyJobStart(jobDetails)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostJobs);
