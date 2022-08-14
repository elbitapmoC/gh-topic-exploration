import { gql } from "@apollo/client";

const GET_REPOS_AND_TOPICS = gql`
  query SearchGithub($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 12) {
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
          licenseInfo {
            key
          }
          primaryLanguage {
            name
            color
          }
          repositoryTopics(first: 10) {
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
    topic(name: $queryString) {
      name
      relatedTopics(first: 10) {
        id
        name
        stargazerCount
      }
    }
  }
`;

export default GET_REPOS_AND_TOPICS;
