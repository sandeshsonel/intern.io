import SavedStudentJobsActionType from "../types/savedStudentJobs.types";

export const saveStudentJobStart = (data) => ({
  type: SavedStudentJobsActionType.SAVE_STUDENT_JOB_START,
  payload: data,
});

export const saveStudentJobSuccess = (data) => ({
  type: SavedStudentJobsActionType.SAVE_STUDENT_JOB_SUCCESS,
  payload: data,
});

export const saveStudentJobFailed = (errorMsg) => ({
  type: SavedStudentJobsActionType.SAVE_STUDENT_JOB_FAILED,
  payload: errorMsg,
});

export const deleteStudentJobStart = (data) => ({
  type: SavedStudentJobsActionType.DELETE_STUDENT_JOB_START,
  payload: data,
});

export const deleteStudentJobSuccess = (data) => ({
  type: SavedStudentJobsActionType.DELETE_STUDENT_JOB_SUCCESS,
  payload: data,
});

export const deleteStudentJobFailed = (errorMsg) => ({
  type: SavedStudentJobsActionType.DELETE_STUDENT_JOB_FAILED,
  payload: errorMsg,
});
