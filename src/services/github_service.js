import axios from "axios";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const token = import.meta.env.VITE_GITHUB_TOKEN2;

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

  return response.data;
};
