import styles from "../styles/Home.module.css";

const Lists = (prop) => {
  return (
    // <aside >
    //   <h2>Documentation &rarr;</h2>
    //   <p>Find in-depth information about Next.js features and API.</p>
    // </aside>

    <article className={styles.grid}>
      {prop.repos.map((repo) => {
        return (
          <aside className={styles.card} key={repo.id}>
            <h2 className="font-bold">{repo.name}</h2>
            <p>{repo.description}</p>
            {/* 
            stargazerCount 
            updatedAt
            forkCount
            licenseInfo.key
            repositoryTopics.nodes (map) node topic.name
            */}
          </aside>
        );
      })}
    </article>
  );
};

export default Lists;
