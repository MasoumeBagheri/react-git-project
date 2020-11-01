import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import SingleRepo from "./components/SingleRepo";

export const GlobalContext = React.createContext();

function App() {
  const [owner, setOwner] = useState(null);
  function getLoginName(loginName) {
    setOwner(loginName);
  }
  return (
    <GlobalContext.Provider value={{ getLoginName, owner }}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/Login" component={Login} />
          <Route path={`/${owner}/:repoName`} component={SingleRepo} />
        </Switch>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}

export default App;
