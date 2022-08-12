import { gql } from "@apollo/client";

const GET_REPOS_AND_TOPICS = gql`
  query SearchGithub($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 84) {
      repositoryCount
      pageInfo {
        # next
        hasNextPage
        endCursor
        # previous
        hasPreviousPage
        startCursor
      }
      nodes {
        ... on Repository {
          id
          url
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
                id
              }
            }
          }
        }
      }
    }
  }
`;

export default GET_REPOS_AND_TOPICS;
