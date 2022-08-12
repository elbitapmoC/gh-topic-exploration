import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Search from "../components/Search";
import Title from "../components/Title";
import List from "../components/List";
import ButtonWithBadge from "../components/ButtonWithBadge";
import GET_REPOS_AND_TOPICS from "../queries/getGithubTopic";
import client from "../graphql-client";

export default function Home({ data, error }) {
  console.log(data.search.nodes);
  return (
    <>
      <Heading />
      <main className={styles.main}>
        <Title title="🚀 Github Explorer" />
        <Search />
        {data !== null && (
          <>
            <ButtonWithBadge count={data.search.repositoryCount} />
            <List repos={data.search.nodes} />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { queryString } = ctx.query;
  if (!queryString) {
    return { props: { data: null } };
  }
  console.log({ queryString });
  try {
    const results = await client.query({
      query: GET_REPOS_AND_TOPICS,
      variables: { queryString },
    });
    return { props: { data: results.data } };
  } catch {
    return { props: { data: null, error: "couldn't fetch from github" } };
  }
}
