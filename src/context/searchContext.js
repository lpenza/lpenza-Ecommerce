import { createContext, useContext, useState } from "react";

const searchContext = createContext([]);

export const useSearchContext = () => useContext(searchContext);

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState('');

  const addSearch = (value) => {
    setSearch(value);
  };


  const value = {
    search,
    addSearch,
  };

  return <searchContext.Provider value={value} displayName="searchContext">{children}</searchContext.Provider>;
};