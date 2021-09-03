import axios from "axios";
import { jobsUrl, signInUrl, signUpUrl } from "../config";
import store from "../store/index";

export const signIn = async (details) => {
  try {
    const res = await axios.post(signInUrl, details);
    return {
      data: res.data,
      message: "Login Successfully",
    };
  } catch (err) {}
};

export const signUp = async (details) => {
  try {
    const res = await axios.post(signUpUrl, details);
  } catch (err) {}
};

export const getAllJobsApi = (data) => async (dispatch, getState) => {
  try {
    const result = await axios.get(jobsUrl, { params: data });
    return {
      data: result.data.data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

export const getCompanyJobs = async () => {
  // const { token } = store.default.store.getState().auth;
  try {
    const result = await axios;
  } catch (error) {}
};
