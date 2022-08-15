const Lists = (prop) => {
  return (
    <article className="grid">
      <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 672px;
          width: 100%;
        }

        .card {
          position: relative;
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #ddd;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          width: 100%;
          min-height: 200px;
          flex-grow: 1;
        }

        .card:hover {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h2 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.5;

          /* Minimizes rows of text to 3 lines. */
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          line-clamp: 3;
          -webkit-box-orient: vertical;
        }
      `}</style>

      {prop.repos.map((repo) => {
        return (
          <a
            href={repo.url}
            target="_blank"
            rel="noreferrer"
            className="card flex flex-col"
            key={repo.id}
          >
            <aside className="grow">
              <h2 className="font-bold">{repo.name}</h2>
              <p className="pb-2">{repo.description}</p>
              <aside className="flex flex-wrap">
                {/* Iterates through the different topics, for each topic, they'll get their own badge. */}
                {repo.repositoryTopics?.nodes.map((node) => {
                  return (
                    <span
                      key={node.topic.id}
                      className="bg-indigo-100 text-indigo-800 text-xs font-semibold mb-2 mr-2 p-2.5 py-0.5 rounded"
                    >
                      {node.topic.name}
                    </span>
                  );
                })}
              </aside>
            </aside>
            <div className="text-sm flex items-center pt-4">
              <span className="flex items-center pr-4">
                {/* We use svg here because Image doesn't allow us to add className's to it.
                Becuase of this, the hover-effect didn't apply (where icon changes alongside the color of text within the card)*/}
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
                {/* There isn't a background color of undefine, we we check the parent, if it exists first. (referring to notes below)*/}
                {repo.primaryLanguage && (
                  <span
                    className="w-5 h-5 mr-1 border-2 border-white rounded-full"
                    style={{ backgroundColor: repo.primaryLanguage.color }}
                  />
                )}
                <span>{repo.primaryLanguage?.name}</span>
              </span>
              {/* Properties that do not exist, triggers an error at runtime.
              We add in optional chaining (?).
              If the parent property isn't defined, instead of throwing an error, 
              it'll return undefined instead of throwing an error.*/}
              <span>{repo.licenseInfo?.key} license</span>
            </div>
          </a>
        );
      })}
    </article>
  );
};

export default Lists;
