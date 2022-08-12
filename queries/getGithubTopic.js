import { gql } from "@apollo/client";

const GET_REPOS_AND_TOPICS = gql`
  query SearchGithub($queryString: String!) {
    initialTopic: topic(name: "react") {
      name
      stargazerCount
      relatedTopics(first: 3) {
        stargazerCount
        name
      }
    }

    search(query: $queryString, type: REPOSITORY, first: 10) {
      repositoryCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        ... on Repository {
          id
          name
          description
          stargazerCount
          updatedAt
          forkCount
          licenseInfo {
            key
          }
        }
      }
    }

    searchableTopic: topic(name: $queryString) {
      name
      stargazerCount
      relatedTopics(first: 3) {
        stargazerCount
        name
      }
    }
  }
`;

export default GET_REPOS_AND_TOPICS;
