export const cards = (githubStats) => {
  return [
    { value: githubStats.repositories, suffix: "+", label: "Repositories" },
    { value: githubStats.stars, suffix: "+", label: "Stars" },
    { value: githubStats.contributions, suffix: "+", label: "Contributions" },
    { value: githubStats.pullRequests, suffix: "+", label: "Pull Requests" },
    { value: githubStats.followers, suffix: "+", label: "Followers" },
  ];
};
