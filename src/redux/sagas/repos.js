import { put, call, takeLatest } from "redux-saga/effects";
import {
  getReposFailed,
  getReposPending,
  getReposSuccess,
} from "../actions/actions";
import { GET_REPOS_REQUEST } from "../actions/actionTypes";
import { getRepos } from "../api/repos";

function* fetchRepos(action) {
  yield put(getReposPending());
  try {
    const { repos, owner } = yield call(getRepos);
    console.log(repos);
    console.log(owner);
    yield put(getReposSuccess({ repos, owner }));
  } catch (error) {
    yield put(getReposFailed());
  }
}

function* reposSaga() {
  yield takeLatest(GET_REPOS_REQUEST, fetchRepos);
}

export default reposSaga;
