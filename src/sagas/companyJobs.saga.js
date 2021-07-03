import CompanyJobsActionTypes from "../app/types/companyJobs.types";
const { all, call, fork, put, takeEvery, delay } = require("redux-saga/effects");
const { getCompanyJobsApi, addCompanyJobApi, deleteJobApi } = require("../utils/apiFetch");
const {
  getAllCompanyJobsSuccess,
  getAllCompanyJobsFailed,
  addCompanyJobStart,
  addCompanyJobSuccess,
  addCompanyJobFailed,
  deleteCompanyJobSuccess,
  deleteCompanyJobFailed,
} = require("../app/actions");

const getCompanyJobsRequest = async () => {
  return await getCompanyJobsApi()
    .then((res) => res)
    .catch((err) => err);
};

const addCompanyJobRequest = async (data) => {
  return await addCompanyJobApi(data)
    .then((res) => res)
    .catch((err) => err);
};

const deleteCompanyJobRequest = async (data) => {
  return await deleteJobApi(data)
    .then((res) => res)
    .catch((err) => err);
};

function* getCompanyJobsFun() {
  try {
    const companyJobs = yield call(getCompanyJobsRequest);
    if (Number(companyJobs.status) === 1) {
      yield put(getAllCompanyJobsSuccess(companyJobs.data));
    } else if (Number(companyJobs.status) === 0) {
      yield put(getAllCompanyJobsFailed(companyJobs.message));
    } else {
      yield put(getAllCompanyJobsFailed(companyJobs.message));
      yield delay(5000);
      yield put(getAllCompanyJobsFailed(null));
    }
  } catch (error) {
    yield put(getAllCompanyJobsFailed(error));
  }
}

function* addCompanyJobFun({ payload }) {
  console.log("xoxo-payload", payload);
  try {
    const companyJobs = yield call(addCompanyJobRequest, payload);
    if (Number(companyJobs.status) === 1) {
      yield put(addCompanyJobSuccess(companyJobs.data));
    } else if (Number(companyJobs.status) === 0) {
      yield put(addCompanyJobFailed(companyJobs.message));
    } else {
      yield put(addCompanyJobFailed(companyJobs.message));
      yield delay(5000);
      yield put(addCompanyJobFailed(null));
    }
  } catch (error) {
    console.log(error);
    yield put(addCompanyJobFailed(error));
  }
}

function* deleteCompanyJobFun({ payload }) {
  try {
    const companyJobs = yield call(deleteCompanyJobRequest, payload);
    if (Number(companyJobs.status) === 1) {
      yield put(deleteCompanyJobSuccess(companyJobs.data));
    } else if (Number(companyJobs.status) === 0) {
      yield put(deleteCompanyJobFailed(companyJobs.message));
    } else {
      yield put(deleteCompanyJobFailed(companyJobs.message));
      yield delay(5000);
      yield put(deleteCompanyJobFailed(null));
    }
  } catch (error) {
    yield put(deleteCompanyJobFailed(error));
  }
}

export function* addCompanyJob() {
  yield takeEvery(CompanyJobsActionTypes.ADD_COMPANY_JOB_START, addCompanyJobFun);
}

export function* getCompanyJobs() {
  yield takeEvery(CompanyJobsActionTypes.GET_ALL_COMPANY_JOBS, getCompanyJobsFun);
}

export function* deleteCompanyJob() {
  yield takeEvery(CompanyJobsActionTypes.DELETE_COMPANY_JOB, deleteCompanyJobFun);
}

export default function* rootSaga() {
  yield all([fork(getCompanyJobs), fork(addCompanyJob), fork(deleteCompanyJob)]);
}
