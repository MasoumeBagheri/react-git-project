import {
  GET_SINGLEREPO_FAILED,
  GET_SINGLEREPO_PENDING,
  GET_SINGLEREPO_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  singleRepo: {},
  loading: false,
};

export default function singleRepoReducer(state = initialState, action) {
  switch (action.type) {
    case GET_SINGLEREPO_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case GET_SINGLEREPO_SUCCESS: {
      return {
        ...state,
        loading: false,
        singleRepo: action.payload.singleRepo,
      };
    }
    case GET_SINGLEREPO_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
}
