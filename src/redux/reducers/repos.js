import {
  GET_REPOS_FAILED,
  GET_REPOS_PENDING,
  GET_REPOS_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  repos: [],
  loading: false,
  owner: "",
};

export default function reposReducer(state = initialState, action) {
  switch (action.type) {
    case GET_REPOS_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_REPOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        repos: action.payload.repos,
        owner: action.payload.owner,
      };
    }
    case GET_REPOS_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
}
