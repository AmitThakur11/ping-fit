import react, { useContext, createContext } from "react";

const dataContext = createContext();

export default function DataProvider(children) {
  return <dataContext.Provider value={{}}>{children}</dataContext.Provider>;
}

export const useData = ()=>useContext(dataContext)