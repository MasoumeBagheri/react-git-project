import { put, call, takeLatest } from "redux-saga/effects";
import {
  getReposPending,
  getSingleReposFailed,
  getSingleReposSuccess,
} from "../actions/actions";
import { GET_SINGLEREPO_REQUEST } from "../actions/actionTypes";
import { getSingleRepo } from "../api/singleRepo";

function* fetchSingleRepo(action) {
  console.log(action);
  //const { owner, repoName } = action.payload;
  const owner = "MasoumeBagheri";
  const repoName = "react-git-project";
  yield put(getReposPending());
  try {
    const singleRepo = yield call(getSingleRepo, owner, repoName);

    yield put(getSingleReposSuccess({ singleRepo }));
  } catch (error) {
    yield put(getSingleReposFailed);
  }
}

function* singleRepoSaga() {
  yield takeLatest(GET_SINGLEREPO_REQUEST, fetchSingleRepo);
}
export default singleRepoSaga;
