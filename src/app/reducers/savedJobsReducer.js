import SavedStudentJobsActionTypes from "../types/savedStudentJobs.types";

const initialState = {
  saveJobs: [],
  isLoading: false,
  errorMsg: null,
};

const saveJobsReducer = (state = initialState, action) => {
  switch (action.payload) {
    case SavedStudentJobsActionTypes.SAVE_STUDENT_JOB_START:
      return {
        ...state,
        isLoading: true,
      };
    case SavedStudentJobsActionTypes.SAVE_STUDENT_JOB_SUCCESS:
      return {
        ...state,
        isLoading: false,
        saveJobs: action.payload,
      };
    case SavedStudentJobsActionTypes.SAVE_STUDENT_JOB_FAILED:
      return {
        ...state,
        isLoading: false,
        errorMsg: action.payload,
      };
    default:
      return state;
  }
};

export default saveJobsReducer;
