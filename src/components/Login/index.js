import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../App";

function Login() {
  const { getLoginName } = React.useContext(GlobalContext);

  let token = "792ed5cce871a5ee92b245cdc8d828aa2a850d2a";

  const [reposUrl, setReposUrl] = useState(null);
  const [loginName, setLoginName] = useState(null);
  const [repos, setRepos] = useState(null);

  const fetchLoginName = async () => {
    await fetch("https://api.github.com/user", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setReposUrl(data.repos_url);
        setLoginName(data.login);
      });
    if (reposUrl !== null) {
      await fetch(reposUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setRepos(data);
        });
    }
  };
  useEffect(() => {
    fetchLoginName();
  }, [reposUrl]);

  getLoginName(loginName);

  return (
    <>
      <h1>LOGIN</h1>
      {repos &&
        repos.map((repo) => {
          return (
            <>
              <Link to={`/${loginName}/${repo.name}`}>{repo.name}</Link>
              <br />
            </>
          );
        })}
    </>
  );
}

export default Login;
