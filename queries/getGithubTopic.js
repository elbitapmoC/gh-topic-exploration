import { gql } from "@apollo/client";

const GET_REPOS_AND_TOPICS = gql`
  query SearchGithub($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 36) {
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
            # MIT, CC0, etc.
            key
          }
          # Each language has a unique color attached to it.
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
    # Gets topics related to what's typed above or the topic user clicks.
    topic(name: $queryString) {
      name
      stargazerCount
      relatedTopics(first: 10) {
        id
        name
        stargazerCount
      }
    }
  }
`;

export default GET_REPOS_AND_TOPICS;
