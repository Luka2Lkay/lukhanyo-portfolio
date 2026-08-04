import axios from "axios";
const username = import.meta.env.VITE_GITHUB_USERNAME;
const token = import.meta.env.VITE_GITHUB_TOKEN;

export const getGithubStats = async () => {
  const query = `
query($username: String!) {
  user(login: $username) {
    pullRequests {
      totalCount
    }

    followers {
      totalCount
    }

    repositories(ownerAffiliations: OWNER first: 100) {
      totalCount

      nodes {
        stargazerCount
    }
  }

  contributionsCollection {
    totalCommitContributions
    totalPullRequestContributions

    contributionCalendar {
      totalContributions
    }
}

}
}
`;

  const response = await axios.post(
    `https://api.github.com/graphql`,
    {
      query,
      variables: { username },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  const stars = response.data.data.user.repositories.nodes.reduce(
    (acc, repo) => acc + repo.stargazerCount,
    0,
  );

  response.data.data.user.repositories.totalStars = stars;

  return {
    repositories: response.data.data.user.repositories.totalCount,
    stars: response.data.data.user.repositories.totalStars,
    contributions:
      response.data.data.user.contributionsCollection.totalCommitContributions,
    pullRequests: response.data.data.user.pullRequests.totalCount,
    followers: response.data.data.user.followers.totalCount,
  };
};
