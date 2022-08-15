import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Search from "../components/Search";
import Title from "../components/Title";
import List from "../components/List";
import RelatedTopics from "../components/RelatedTopics";
// import Pagination from "../components/Pagination";
import ResultsBadge from "../components/ResultsBadge";
import GET_REPOS_AND_TOPICS from "../queries/getGithubTopic";
import client from "../graphql-client";

export default function Home({ data, error }) {
  return (
    <>
      {/* We've got a couple options for CSS-- 
    - global style for everything..
    - BEM
    - CSS Modules
    - Preprocessors like scss
    - etc.
    
    We'll use Styled JSX. 
    - Setup for do more programmatic things.
    - Creating dynamic styles
    - My favorite, scoped styles */}
      <style jsx>
        {`
          .main {
            min-height: 85vh;
            padding: 4rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        `}
      </style>

      <Heading />
      <main className="main">
        <Title title="🚀 Github Explorer" />
        <Search />
        {/* Only show this portion when our query returns results. */}
        {data !== null && (
          <>
            <RelatedTopics topic={data.topic} />
            <ResultsBadge count={data.search.repositoryCount} />
            <List repos={data.search.nodes} />
          </>
        )}
        {/* <Pagination /> */}
      </main>
      <Footer />
    </>
  );
}

// Only runs on server-side and never runs on the browser.
// Runs at request time, and this page will be pre-rendered with the returned props
// When we request this page, Next.js sends an API request to the server
export async function getServerSideProps(ctx) {
  // ctx is an object containing the query string, including dynamic route parameters. (via: https://nextjs.org/docs/api-reference/data-fetching/get-server-side-props)
  const { queryString } = ctx.query;
  // Checking to see if the string is empty
  if (!queryString) {
    return { props: { data: null } };
  }
  try {
    // Fetches GraphQL data w/ useQuery hook, so we can attach the results to our UI.
    // "The useQuery React hook is the primary API for executing queries in an Apollo application."
    const results = await client.query({
      query: GET_REPOS_AND_TOPICS,
      // Variable we need to get expected results, based on user input.
      variables: { queryString },
    });
    // Data for us to use on the client side.
    return { props: { data: results.data } };
  } catch {
    return { props: { data: null, error: "couldn't fetch from github" } };
  }
}
