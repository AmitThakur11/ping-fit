import  { useContext, createContext,useState,useEffect} from "react";
import axios from "axios";
import {data} from "./data"
const dataContext = createContext();

export default function DataProvider({children}) {
  const [searchInput ,setSearchInput] = useState(null);
  const [videoData ,setVideoData] = useState([])
  
  const takeSearchInput = (e)=>{
    setSearchInput(e.target.value);
    console.log(searchInput)
  }

  const searchResult = async(search)=>{
    const {results} = await axios.get(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${search}&numResults=20`)
    console.log(results)
  }
  
  const value ={
    searchInput : searchInput,
    takeSearchInput : takeSearchInput,
    data : data,
    videoData  : videoData
  }

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
}

export const useData = ()=>useContext(dataContext)