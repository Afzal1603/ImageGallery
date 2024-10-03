import React, { useContext } from "react";
import { AppContext1 } from "../Store/AppContext1";

function CustomButton({ searchItem }) {
  const context = useContext(AppContext1);
  return (
    <button
      type="button"
      className="px-3 py-2 text-xs font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800  focus:outline-none dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={() => context.setQuery(searchItem)}
    >
      {searchItem}
    </button>
  );
}

export default CustomButton;
