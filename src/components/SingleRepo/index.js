import React from "react";
import { useSelector } from "react-redux";

function SingleRepo(props) {
  const {
    match: {
      params: { repoName },
    },
  } = props;
  const singleRepo = useSelector((state) => state.singleRepo.singleRepo);
  console.log(singleRepo);
  return (
    <>
      <h1>{repoName}</h1>
    </>
  );
}
export default SingleRepo;
