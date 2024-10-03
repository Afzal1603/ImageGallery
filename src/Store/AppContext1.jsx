import React, { createContext, useState } from "react";

const AppContext1 = createContext(null);

const AppContextProvider = ({ children }) => {
  const [query, setQuery] = useState("dog");
  const [data, setData] = useState([]);
  return (
    <AppContext1.Provider value={{ query, setQuery, data, setData }}>
      {children}
    </AppContext1.Provider>
  );
};

export { AppContext1, AppContextProvider };
