import AuthActionTypes from "../types/auth.types.js";

export const setLogin = (flag) => ({
  type: AuthActionTypes.IS_LOGIN_USER,
  payload: flag,
});

export const setUserData = (data) => ({
  type: AuthActionTypes.SET_USER_DATA,
  payload: data,
});

export const signUpUser = (data) => ({
  type: AuthActionTypes.SIGN_UP_USER,
  payload: data,
});

export const signUpUserSuccess = (data) => ({
  type: AuthActionTypes.SIGN_UP_USER_SUCCESS,
  payload: data,
});
export const signUpUserFailed = (errorMsg) => ({
  type: AuthActionTypes.SIGN_UP_USER_FAILED,
  payload: errorMsg,
});

// signin
export const setSignInUserDetails = (signInDetails) => ({
  type: AuthActionTypes.SET_SIGN_IN_USER_DETAILS,
  payload: signInDetails,
});
export const signInUserSuccess = (data) => ({
  type: AuthActionTypes.SIGN_IN_USER_SUCCESS,
  payload: data,
});
export const signInUserFailed = (errorMsg) => ({
  type: AuthActionTypes.SIGN_IN_USER_FAILED,
  payload: errorMsg,
});

export const signOutUser = () => ({
  type: AuthActionTypes.SIGN_OUT_USER,
});

export const userSignOutSuccess = () => ({
  type: AuthActionTypes.USER_SIGN_OUT_SUCCESS,
});
