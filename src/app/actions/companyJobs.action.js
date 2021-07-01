import CompanyJobsActionTypes from "../types/companyJobs.types";

export const getAllCompanyJobs = () => ({
  type: CompanyJobsActionTypes.GET_ALL_COMPANY_JOBS,
});

export const getAllCompanyJobsSuccess = (companyJobs) => ({
  type: CompanyJobsActionTypes.GET_ALL_COMPABY_JOBS_SUCCESS,
  payload: companyJobs,
});

export const getAllCompanyJobsFailed = (errorMsg) => ({
  type: CompanyJobsActionTypes.GET_ALL_COMPABY_JOBS_FAILED,
  payload: errorMsg,
});

export const addCompanyJob = () => ({
  type: CompanyJobsActionTypes.ADD_COMPANY_JOB,
});

export const addCompanyJobSuccess = (companyJob) => ({
  type: CompanyJobsActionTypes.ADD_COMPANY_JOB_SUCCESS,
  payload: companyJob,
});

export const addCompanyJobFailed = (errorMsg) => ({
  type: CompanyJobsActionTypes.ADD_COMPANY_JOB_FAILED,
  payload: errorMsg,
});

export const deleteCompanyJob = () => ({
  type: CompanyJobsActionTypes.DELETE_COMPANY_JOB,
});

export const deleteCompanyJobSuccess = (companyJob) => ({
  type: CompanyJobsActionTypes.DELETE_COMPANY_JOB_SUCCESS,
  payload: companyJob,
});

export const deleteCompanyJobFailed = (errorMsg) => ({
  type: CompanyJobsActionTypes.DELETE_COMPANY_JOB_FAILED,
  payload: errorMsg,
});

export const updateCompanyJob = () => ({
  type: CompanyJobsActionTypes.UPDATE_COMPANY_JOB,
});

export const updateCompanyJobSuccess = (companyJob) => ({
  type: CompanyJobsActionTypes.UPDATE_COMPANY_JOB_SUCCESS,
  payload: companyJob,
});

export const updateCompanyJobFailed = (errorMsg) => ({
  type: CompanyJobsActionTypes.UPDATE_COMPANY_JOB_FAILED,
  payload: errorMsg,
});
