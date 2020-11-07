import { all } from "redux-saga/effects";
import reposSaga from "./repos";
import singleRepoSaga from "./singleRepoSaga";

export default function* rootSaga() {
  yield all([reposSaga(), singleRepoSaga()]);
}
