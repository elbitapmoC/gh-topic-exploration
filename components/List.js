import styles from "../styles/Home.module.css";

const Lists = (prop) => {
  console.log(prop);
  return (
    <article className={styles.grid}>
      {prop.repos.map((repo) => {
        return (
          <a
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className={`${styles.card} flex flex-col`}
            key={repo.id}
          >
            <aside className=" grow">
              <h2 className="font-bold">{repo.name}</h2>
              <p className="pb-2">{repo.description}</p>
              {repo.repositoryTopics.nodes.map((node) => {
                return (
                  <span
                    key={node.topic.id}
                    className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 p-2.5 py-0.5 rounded"
                  >
                    {node.topic.name}
                  </span>
                );
              })}
            </aside>
            <div className="text-sm flex items-center pt-4">
              <span className="flex items-center pr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
                {repo.stargazerCount}
              </span>
              <span className="flex items-center pr-4">
                <span
                  className="w-5 h-5 mr-1 border-2 border-white rounded-full"
                  style={{
                    backgroundColor: repo.primaryLanguage?.color
                      ? repo.primaryLanguage.color
                      : "",
                  }}
                ></span>
                <span>{repo.primaryLanguage?.name}</span>
              </span>
              <span>{repo.licenseInfo?.key} license</span>
            </div>
          </a>
        );
      })}
    </article>
  );
};

export default Lists;
