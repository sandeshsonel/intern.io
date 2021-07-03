import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "../reducers/authReducer";
import userProfileReducer from "../reducers/userReducer";
// import myJobsReducer from "./jobReducer";
import companyJobReducer from "../reducers/companyJobsReducer";
import studentApplicationReducer from "../reducers/studentsAppReducer";
import jobsReducer from "../reducers/jobsReducer";

const persistConfig = {
  key: "root",
  storage,
  // Whitelist (Save Specific Reducers)
  whitelist: ["auth", "userProfile"],
  // Blacklist (Don't Save Specific Reducers)
  // blacklist: ['authReducer.loading'],
};

const reducers = combineReducers({
  auth: authReducer,
  userProfile: userProfileReducer,
  companyJobs: companyJobReducer,
  studentApplications: studentApplicationReducer,
  jobs: jobsReducer,
});

export default persistReducer(persistConfig, reducers);
