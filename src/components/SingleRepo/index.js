import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../App";
import Contributors from "./Contributors";
import Languages from "./Languages";

function SingleRepo(props) {
  const { owner, getBranch } = React.useContext(GlobalContext);
  const {
    match: {
      params: { repoName },
    },
  } = props;

  const [singleRepo, setSingleRepo] = useState(null);
  const [branches, setbranches] = useState("");

  useEffect(() => {
    const fetchRepo = async () => {
      await fetch(`https://api.github.com/repos/${owner}/${repoName}`)
        .then((res) => res.json())
        .then((data) => {
          setSingleRepo(data);
        });

      await fetch(`https://api.github.com/repos/${owner}/${repoName}/branches`)
        .then((res) => res.json())
        .then((data) => {
          setbranches(data);
        });
    };

    fetchRepo();
  }, []);
  console.log(singleRepo);

  return (
    <>
      <h1>{repoName}</h1>
      {singleRepo && (
        <>
          <Contributors contributorsUrl={singleRepo.contributors_url} />
          <Languages languagesUrl={singleRepo.languages_url} />
          {branches &&
            branches.map((branch) => {
              getBranch(branch.name);
              return (
                <Link
                  key={branch.commit.sha}
                  to={`/${owner}/${repoName}/branches/${branch.name}`}
                >
                  {branch.name}
                </Link>
              );
            })}
        </>
      )}
    </>
  );
}
export default SingleRepo;
