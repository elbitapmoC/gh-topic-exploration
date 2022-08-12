import { gql } from "@apollo/client";

const GET_REPOS_AND_TOPICS = gql`
  query SearchGithub($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 12) {
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
          primaryLanguage {
            name
            color
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
