import React from "react";

const RelatedTopics = ({ topic }) => {
  return (
    <>
      <div className="max-w-2xl realtedTopics__table p-4 flex w-full mb-8">
        <table className="w-full text-sm text-left text-gray-500">
          <caption className="mb-4 p-5 text-lg font-semibold text-left text-gray-900 bg-white">
            <h2 className="mb-2">
              Related Topics for: <em>{topic.name}</em>
            </h2>
            <hr />
            <p className="mt-1 text-sm bold text-gray-500">
              Stargazers: <em>{topic.stargazerCount}</em>
            </p>
            <p className="mt-1 text-sm font-normal text-gray-500">
              Topics designed for you! Creating connections between GitHub
              repositories. Explore projects by type, technology, and so much
              more.
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6">
                Related Topics
              </th>
              <th scope="col" className="py-3 px-6">
                Stargazers
              </th>
            </tr>
          </thead>
          <tbody>
            {topic.relatedTopics.map((related) => {
              return (
                <tr
                  className="hover:bg-gray-50 bg-white border-b"
                  // Reminder: Anytime we're mapping through an array is best practice to add a key.
                  key={related.id}
                >
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <a
                      className="text-blue-500"
                      href={`/?queryString=${related.name}`}
                    >
                      <u>{related.name}</u>
                    </a>
                  </th>
                  <td className="py-4 px-6">{related.stargazerCount}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RelatedTopics;
