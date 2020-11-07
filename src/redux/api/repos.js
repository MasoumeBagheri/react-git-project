export async function getRepos() {
  let token = "00c76407afdf7144c9175ece8dc494746bbc3046";

  const reposUrlData = await fetch("https://api.github.com/user", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });
  const data = await reposUrlData.json();
  const reposUrl = data.repos_url;
  const owner = data.login;

  const reposData = await fetch(reposUrl, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
    },
  });
  const repos = await reposData.json();

  return { repos, owner };
}
