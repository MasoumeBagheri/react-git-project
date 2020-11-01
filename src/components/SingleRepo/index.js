import React, { useEffect } from "react";
import { GlobalContext } from "../../App";

function SingleRepo(props) {
  const { owner } = React.useContext(GlobalContext);
  const {
    match: {
      params: { repoName },
    },
  } = props;

  useEffect(() => {
    const fetchRepo = async () => {
      await fetch(`https://api.github.com/repos/${owner}/${repoName}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    };
    fetchRepo();
  });
  return (
    <>
      <h1>{repoName}</h1>
    </>
  );
}
export default SingleRepo;
