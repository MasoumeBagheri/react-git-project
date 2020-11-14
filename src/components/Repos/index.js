import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../App";

function Repos() {
  const { getLoginName } = React.useContext(GlobalContext);

  let token = "e08f1121ae1f539a2b4c711da06bb5d6a10af43b";

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
      <h1>Repos</h1>
      {repos &&
        repos.map((repo) => {
          return (
            <Link key={repo.id} to={`/${loginName}/${repo.name}`}>
              <h3>{repo.name}</h3>
            </Link>
          );
        })}
    </>
  );
}

export default Repos;
