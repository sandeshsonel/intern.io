import StudentAppActionTypes from "../types/studentApp.types";

const initialState = {
  studentApplications: [],
  isLoading: false,
  error: null,
};

const studentAppReducer = (state = initialState, action) => {
  switch (action.type) {
    case StudentAppActionTypes.GET_STUDENT_APPLICATIONS:
      return {
        ...state,
        isLoading: true,
      };
    case StudentAppActionTypes.GET_STUDENT_APPLICATIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        studentApplications: action.payload,
      };
    case StudentAppActionTypes.GET_STUDENT_APPLICATIONS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default studentAppReducer;
