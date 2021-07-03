import JobsActionTypes from "../types/jobs.types";

export const getAllJobsStart = (data) => {
  console.log("data", data);
  return {
    type: JobsActionTypes.GET_ALL_JOBS_START,
    payload: data,
  };
};
export const getAllJobsSuccess = (jobs) => ({
  type: JobsActionTypes.GET_ALL_JOBS_SUCCESS,
  payload: jobs,
});
export const getAllJobsFailed = (errorMsg) => ({
  type: JobsActionTypes.GET_ALL_JOBS_FAILED,
  payload: errorMsg,
});

export const getJobsByQueryStart = (data) => ({
  type: JobsActionTypes.GET_JOBS_BY_QUERY_START,
  payload: data,
});
export const getJobsByQuerySuccess = (jobs) => ({
  type: JobsActionTypes.GET_JOBS_BY_QUERY_SUCCESS,
  payload: jobs,
});
export const getJobsByQueryFailed = (errorMsg) => ({
  type: JobsActionTypes.GET_JOBS_BY_QUERY_FAILED,
  payload: errorMsg,
});
