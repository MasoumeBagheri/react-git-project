import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Repos from "./components/Repos";
import SingleRepo from "./components/SingleRepo";
import Branch from "./components/SingleRepo/Branch";

export const GlobalContext = React.createContext();

function App() {
  const [owner, setOwner] = useState(null);
  const [branchName, setBranch] = useState(null);

  function getLoginName(loginName) {
    setOwner(loginName);
  }

  function getBranch(branchName) {
    setBranch(branchName);
  }

  return (
    <GlobalContext.Provider
      value={{ getLoginName, owner, getBranch, branchName }}
    >
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Repos" component={Repos} />
          <Route path={`/${owner}/:repoName`} exact component={SingleRepo} />
          <Route
            path={`/${owner}/:repoName/branches/${branchName}`}
            component={Branch}
          />
        </Switch>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
