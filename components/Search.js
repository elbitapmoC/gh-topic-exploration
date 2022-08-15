import React from "react";
import Image from "next/image";

const Search = () => {
  return (
    // Submitting the form, sends user input to server, which allows us to render the related topics and cards/items centered around what the user searched for.
    <form className="flex items-center mb-12">
      {/* Whenever we see, SR-ONLY, it means, Screen reader only */}
      {/* htmlFor, script-accessible property used to set & read the value of the content property, which is the ID of the label's associated with the input below (control element)  */}
      <label htmlFor="simple-search" className="sr-only">
        Search topics and repos
      </label>
      <aside className="relative ">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <Image
            src="/icons/search_gray.svg"
            alt="search icon, color: gray"
            className="h-5 w-5"
            width={15}
            height={15}
          />
        </div>
        <input
          name="queryString"
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
          placeholder="Search topics or repos"
          required=""
        />
      </aside>
      <button
        type="submit"
        className="flex justify-between p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
      >
        Submit
        {/* Whenever we see, SR-ONLY, it means, Screen reader only */}
        <span className="sr-only">Search topics and repos</span>
      </button>
    </form>
  );
};

export default Search;
