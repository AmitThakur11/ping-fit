import  { useContext, createContext,useState} from "react";
// import axios from "axios";
import {data} from "./data"
const dataContext = createContext();

export default function DataProvider({children}) {
  const [searchInput ,setSearchInput] = useState(null);
  
  const getSearchInput = (e)=>{
    setSearchInput((e)=>e.target.value)

  }
  const value ={
    searchInput : searchInput,
    getSearchInput : getSearchInput,
    data : data
  }
  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
}

export const useData = ()=>useContext(dataContext)