import JobsActionTypes from "../types/jobs.types";

const initialState = {
  jobs: [],
  isLoading: false,
  errorMsg: null,
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case JobsActionTypes.GET_ALL_JOBS_START:
      return {
        ...state,
        isLoading: true,
      };
    case JobsActionTypes.GET_ALL_JOBS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jobs: action.payload,
      };
    case JobsActionTypes.GET_ALL_JOBS_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    case JobsActionTypes.GET_JOBS_BY_QUERY_START:
      return {
        ...state,
        isLoading: true,
      };
    case JobsActionTypes.GET_JOBS_BY_QUERY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        jobs: action.payload,
      };
    case JobsActionTypes.GET_JOBS_BY_QUERY_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default jobsReducer;
