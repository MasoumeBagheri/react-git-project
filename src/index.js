import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./redux";
import {
  GET_REPOS_REQUEST,
  GET_SINGLEREPO_REQUEST,
} from "./redux/actions/actionTypes";
import reportWebVitals from "./reportWebVitals";

store.dispatch({ type: GET_REPOS_REQUEST });
store.dispatch({ type: GET_SINGLEREPO_REQUEST });
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
