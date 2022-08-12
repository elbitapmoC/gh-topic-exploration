import { gql } from "@apollo/client";

const GET_REPOS_AND_TOPICS = gql`
  query SearchGithub($queryString: String!, $first: Int) {
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
          repositoryTopics(first: 5) {
            nodes {
              topic {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_REPOS_AND_TOPICS;
