import {
  GET_REPOS_FAILED,
  GET_REPOS_PENDING,
  GET_REPOS_REQUEST,
  GET_REPOS_SUCCESS,
  GET_SINGLEREPO_PENDING,
  GET_SINGLEREPO_REQUEST,
  GET_SINGLEREPO_SUCCESS,
  GET_SINGLEREPO_FAILED,
} from "./actionTypes";
/******************Repos Actions*********************/
export function getReposRequest() {
  return {
    type: GET_REPOS_REQUEST,
  };
}

export function getReposPending() {
  return {
    type: GET_REPOS_PENDING,
  };
}

export function getReposSuccess({ repos, owner }) {
  return {
    type: GET_REPOS_SUCCESS,
    payload: {
      repos,
      owner,
    },
  };
}

export function getReposFailed() {
  return {
    type: GET_REPOS_FAILED,
  };
}
/******************SingleRepo Actions*********************/
export function getSingleReposRequest({ owner, repoName }) {
  return {
    type: GET_SINGLEREPO_REQUEST,
    payload: {
      owner,
      repoName,
    },
  };
}

export function getSingleReposPending() {
  return {
    type: GET_SINGLEREPO_PENDING,
  };
}

export function getSingleReposSuccess({ singleRepo }) {
  return {
    type: GET_SINGLEREPO_SUCCESS,
    payload: {
      singleRepo,
    },
  };
}

export function getSingleReposFailed() {
  return {
    type: GET_SINGLEREPO_FAILED,
  };
}
