import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Repos() {
  const repos = useSelector((state) => state.repos.repos.repos);
  const owner = useSelector((state) => state.repos.owner);

  return (
    <>
      <h1>Repos</h1>
      {repos &&
        repos.map((repo) => {
          return (
            <>
              <Link to={`/${owner}/${repo.name}`}>{repo.name}</Link>

              <br />
            </>
          );
        })}
    </>
  );
}

export default Repos;
