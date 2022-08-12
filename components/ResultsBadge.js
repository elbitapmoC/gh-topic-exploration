import React from "react";

const ResultsBadge = (props) => {
  return (
    <aside className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center rounded-lg">
      Results:
      <span className="p-2 inline-flex justify-center items-center ml-2 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
        {props.count}
      </span>
    </aside>
  );
};

export default ResultsBadge;
