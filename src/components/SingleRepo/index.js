import React, { useEffect, useState } from "react";
import { GlobalContext } from "../../App";
import Contributors from "./Contributors";
import Languages from "./Languages";

function SingleRepo(props) {
  const { owner } = React.useContext(GlobalContext);
  const {
    match: {
      params: { repoName },
    },
  } = props;

  /* ${owner}/${repoName} */
  //facebook/react

  const [singleRepo, setSingleRepo] = useState(null);

  useEffect(() => {
    const fetchRepo = async () => {
      await fetch(`https://api.github.com/repos/${owner}/${repoName}`)
        .then((res) => res.json())
        .then((data) => {
          setSingleRepo(data);
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
        </>
      )}
    </>
  );
}
export default SingleRepo;
