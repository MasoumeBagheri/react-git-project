import { combineReducers } from "redux";
import reposReducer from "./repos";
import singleRepoReducer from "./singleRepo";

export default combineReducers({
  repos: reposReducer,
  singleRepo: singleRepoReducer,
});
