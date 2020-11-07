export async function getSingleRepo(owner, repoName) {
  const singleRepoData = await fetch(
    `https://api.github.com/repos/${owner}/${repoName}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
  const data = singleRepoData.json();
  return data;
}
