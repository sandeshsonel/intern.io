import JobsActionTypes from "../app/types/jobs.types";
const { all, call, fork, put, takeEvery, delay } = require("redux-saga/effects");
const { getAllJobsApi } = require("../utils/apiFetch");
const { getAllJobsSuccess, getAllJobsFailed } = require("../app/actions");

const getAllCompanyJobRequest = async (data) => {
  return await getAllJobsApi(data)
    .then((res) => res)
    .catch((err) => err);
};

function* getAllJobsFun({ payload }) {
  console.log("payload", payload);
  try {
    const jobs = yield call(getAllCompanyJobRequest, payload);
    if (Number(jobs.status) === 1) {
      yield put(getAllJobsSuccess(jobs.data));
    } else if (Number(jobs.status) === 0) {
      yield put(getAllJobsFailed(jobs.message));
      yield delay(5000);
      yield put(getAllJobsFailed(null));
    }
  } catch (error) {
    console.log(error);
    yield put(getAllJobsFailed(error));
  }
}

export function* getAllJobs() {
  yield takeEvery(JobsActionTypes.GET_ALL_JOBS_START, getAllJobsFun);
}

export default function* rootSaga() {
  yield all([fork(getAllJobs)]);
}
