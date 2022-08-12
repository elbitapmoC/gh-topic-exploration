import React from "react";

const Pagination = () => {
  return (
    <aside className="flex justify-between m-4">
      <button
        type="button"
        class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
      >
        Previous
      </button>

      <button
        type="button"
        class="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
      >
        Next
      </button>
    </aside>
  );
};

export default Pagination;
