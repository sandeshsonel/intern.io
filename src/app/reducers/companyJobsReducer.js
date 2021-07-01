import CompanyJobsActionTypes from "../types/companyJobs.types";

const initial_state = {
  companyJobs: [],
  isLoading: false,
  error: null,
};

const companyJobsReducer = (state = initial_state, action) => {
  switch (action.type) {
    case CompanyJobsActionTypes.GET_ALL_COMPANY_JOBS:
      return {
        ...state,
        isLoading: true,
      };
    case CompanyJobsActionTypes.GET_ALL_COMPABY_JOBS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        companyJobs: action.payload,
      };
    case CompanyJobsActionTypes.GET_ALL_COMPABY_JOBS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CompanyJobsActionTypes.ADD_COMPANY_JOB:
      return {
        ...state,
        isLoading: true,
      };
    case CompanyJobsActionTypes.ADD_COMPANY_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        companyJobs: action.payload,
      };
    case CompanyJobsActionTypes.ADD_COMPANY_JOB_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CompanyJobsActionTypes.DELETE_COMPANY_JOB:
      return {
        ...state,
        isLoading: true,
      };
    case CompanyJobsActionTypes.DELETE_COMPANY_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        companyJobs: action.payload,
      };
    case CompanyJobsActionTypes.DELETE_COMPANY_JOB_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case CompanyJobsActionTypes.UPDATE_COMPANY_JOB:
      return {
        ...state,
        isLoading: true,
      };
    case CompanyJobsActionTypes.UPDATE_COMPANY_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        companyJobs: action.payload,
      };
    case CompanyJobsActionTypes.UPDATE_COMPANY_JOB_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default companyJobsReducer;
