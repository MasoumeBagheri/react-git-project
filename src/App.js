import React /* , { useState } */ from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Repos from "./components/Repos";
import SingleRepo from "./components/SingleRepo";

function App() {
  const owner = useSelector((state) => state.repos.owner);
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/Repos" component={Repos} />
        <Route path={`/${owner}/:repoName`} component={SingleRepo} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
