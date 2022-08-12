import styles from "../styles/Home.module.css";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Search from "../components/Search";
import Title from "../components/Title";
import Loading from "../components/Loading";
import GET_REPOS_AND_TOPICS from "../queries/getGithubTopic";
import client from "../graphql-client";

export default function Home({ data, error }) {
  console.log(data);
  return (
    <>
      <section className={styles.container}>
        <Heading />
        <main className={styles.main}>
          <Title title="🚀 Github Explorer" />
          <Search />
        </main>
        <Footer />
      </section>
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

  const { data, isLoading, error } = useQuery();

  console.log(results.data);

  // function RepoAndTopic({ queryString }) {
  //   const { loading, error, data } = useQuery(GET_REPOS_AND_TOPICS, {
  //     variables: { queryString },
  //   });

  //   if (loading) return <Loading />;
  //   if (error) return `Error! ${error}`;
  //   return (
  //     <img src={data.dog.displayImage} style={{ height: 100, width: 100 }} />
  //   );
  // }

  // if (loading) return <Loading />;
  // if (error) return `Error! ${error.message}`;
  // console.log(data);
  return {
    props: {}, // will be passed to the page component as props
  };
}
