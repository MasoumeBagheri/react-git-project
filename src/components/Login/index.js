import React, { useEffect, useState } from "react";

function Login() {
  let token = "a36e128ff50a7c474b49e93ba6cafb93995362c9";

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
        setLoginName(data.login);
        console.log(loginName);
      });

    await fetch(`https://api.github.com/users/${loginName}/repos`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
        console.log(repos);
      });
  };
  useEffect(() => {
    fetchLoginName();
  });

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
