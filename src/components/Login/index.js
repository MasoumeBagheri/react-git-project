import React, { useEffect, useState } from "react";

function Login() {
  let token = "**********";

  const [reposUrl, setReposUrl] = useState(null);
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
        setReposUrl(data.repos_url);
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
          setRepos(data);
        });
    }
  };
  useEffect(() => {
    fetchLoginName();
  }, [reposUrl]);

  return (
    <>
      <h1>LOGIN</h1>
      <ul>
        {repos &&
          repos.map((repo) => {
            return <li key={repo.id}>{repo.name}</li>;
          })}
      </ul>
    </>
  );
}

export default Login;
