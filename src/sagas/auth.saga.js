import storage from "redux-persist/lib/storage";
import history from "../utils/history";
import AuthActionTypes from "../app/types/auth.types";
const { all, call, fork, put, takeEvery } = require("redux-saga/effects");
const { signUpUser, signInUser } = require("../utils/apiFetch");
const {
  setUserData,
  setLogin,
  setUserProfileData,
  userSignOutSuccess,
  signInUserSuccess,
  signInUserFailed,
  signUpUserSuccess,
  signUpUserFailed,
} = require("../app/actions");

const signUpUserRequest = async (data) => {
  console.log(data);
  return await signUpUser(data)
    .then((authUser) => authUser)
    .catch((err) => err);
};

const signInUserRequest = async (data) => {
  return await signInUser(data)
    .then((data) => data)
    .catch((err) => err);
};

function* signInUserFun(data) {
  console.log("msg", data.payload);
  try {
    const signInData = yield call(signInUserRequest, data.payload);
    console.log("signIn", signInData);
    if (Number(signInData.status) === 1) {
      var expireDate = new Date();
      expireDate.setHours(expireDate.getHours() + 1);
      const saveUserData = {
        token: signInData.token,
        fullName: signInData.fullName,
        email: signInData.email,
        expireDate,
      };
      localStorage.setItem("userData", JSON.stringify(saveUserData));
      yield put(setUserProfileData(signInData.data));
      yield put(signInUserSuccess(saveUserData));
      yield put(setLogin(true));
      history.push("/");
    } else if (Number(signInData.status) === 0) {
      yield put(signInUserFailed(signInData.message));
      yield put(setLogin(false));
      alert(signInData.message);
    }
  } catch (error) {
    console.log(error);
    yield put(signInUserFailed());
    yield put(setLogin(false));
  }
}

function* signUpUserFun({ payload }) {
  console.log("popo-payload", payload);
  try {
    const signUpUser = yield call(signUpUserRequest, payload);
    console.log("xolo", signUpUser);
    if (Number(signUpUser.status) === 1) {
      var expireDate = new Date();
      expireDate.setHours(expireDate.getHours() + 1);
      const saveUserData = {
        token: signUpUser.token,
        expireDate,
      };
      localStorage.setItem("userData", JSON.stringify(saveUserData));
      yield put(setUserProfileData(signUpUser.data));
      yield put(signUpUserSuccess(saveUserData));
      yield put(setLogin(true));
      history.push("/");
    } else if (Number(signUpUser.status) === 0) {
      yield put(setLogin(false));
      yield put(signUpUserFailed(signUpUser.message));
      alert(signUpUser.message);
    } else {
      alert("error creating account");
    }
  } catch (error) {
    alert(error);
    // yield put(showAuthMessage(error));
  }
}

function* signOut() {
  try {
    localStorage.removeItem("userData");
    storage.removeItem("persist:root");
    console.warn(localStorage.getItem("userData"));
    yield put(userSignOutSuccess());
  } catch (error) {
    alert(error);
    // yield put(showAuthMessage(error));
  }
}

export function* signInUserAccount() {
  yield takeEvery(AuthActionTypes.SET_SIGN_IN_USER_DETAILS, signInUserFun);
}

export function* createUserAccount() {
  yield takeEvery(AuthActionTypes.SIGN_UP_USER, signUpUserFun);
}

export function* signOutUser() {
  yield takeEvery(AuthActionTypes.SIGN_OUT_USER, signOut);
}

export default function* rootSaga() {
  yield all([fork(signInUserAccount), fork(createUserAccount), fork(signOutUser)]);
}
