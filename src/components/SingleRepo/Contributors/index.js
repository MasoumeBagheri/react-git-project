import React, { useEffect, useState } from "react";

function Contributors({ contributorsUrl }) {
  const [contributors, setContributors] = useState(null);

  useEffect(() => {
    const fetchContributors = async () => {
      await fetch(`${contributorsUrl}`)
        .then((res) => res.json())
        .then((data) => {
          setContributors(data);
        });
    };
    fetchContributors();
  }, []);

  return (
    <>
      <h3>Contributors</h3>
      {contributors &&
        contributors.map((contributor) => {
          return (
            <img
              style={{ width: 30, height: 30, borderRadius: 50 }}
              key={contributor.id}
              src={`${contributor.avatar_url}`}
              alt="Avatar"
            />
          );
        })}
    </>
  );
}
export default Contributors;
