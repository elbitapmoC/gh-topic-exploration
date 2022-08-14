import React from "react";

const RelatedTopics = (props) => {
  console.log({ props });
  return (
    <>
      <div className="max-w-2xl realtedTopics__table p-4 flex w-full mb-8">
        <table className="w-full text-sm text-left text-gray-500">
          <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white">
            <h2>
              Related Topics for: <em>{props.topic.name}</em>
            </h2>
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Topics are labels that create subject-based connections between
              GitHub repositories and let you explore projects by type,
              technology, and so much more
            </p>
          </caption>
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Topic
              </th>
              <th scope="col" className="py-3 px-6">
                Stargazer
              </th>
            </tr>
          </thead>
          <tbody>
            {props.topic.relatedTopics.map((topic) => {
              return (
                <tr className="hover:bg-gray-50 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {topic.name}
                  </th>
                  <td className="py-4 px-6">{topic.stargazerCount}</td>
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
