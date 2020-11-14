import React, { useEffect, useState } from "react";
import { GlobalContext } from "../../../App";

function Branch(props) {
  const { owner, branchName } = React.useContext(GlobalContext);
  const {
    match: {
      params: { repoName },
    },
  } = props;
  const [branch, setBranch] = useState(null);
  useEffect(() => {
    const fetchBranch = async () => {
      await fetch(
        `https://api.github.com/repos/${owner}/${repoName}/branches/${branchName}`
      )
        .then((res) => res.json())
        .then((data) => {
          setBranch(data);
        });
    };
    fetchBranch();
  }, []);
  console.log(branch);

  return <h3>{branchName}</h3>;
}
export default Branch;
