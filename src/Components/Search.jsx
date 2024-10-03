import React, { useContext, useRef } from "react";
import { AppContext1 } from "../Store/AppContext1";

function Search() {
  const context = useContext(AppContext1);
  const input = useRef();
  return (
    <>
      <form
        className="max-w-md mx-auto"
        onSubmit={(event) => {
          event.preventDefault();
          context.setQuery(input.current.value);
          console.log(context.query);
        }}
      >
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            ref={input}
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:#013220sfocus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:#013220 dark:focus:#013220"
            placeholder="Search people,trees,cats...."
            required
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-[#013220] hover:bg-[#027148] focus:ring-4 focus:outline-none focus:[#04AF70] font-medium rounded-lg text-sm px-4 py-2 dark:bg-[#04AF70] dark:hover:bg-[#04AF70] dark:focus:[#04AF70]"
          >
            Search
          </button>
        </div>
      </form>
    </>
  );
}

export default Search;
