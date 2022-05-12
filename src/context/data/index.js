import  { useContext, createContext,useState,useEffect} from "react";
import axios from "axios";

const dataContext = createContext();

export default function DataProvider({children}) {
  const [searchInput ,setSearchInput] = useState("");
  const [videoData ,setVideoData] = useState([])
  const [loading,setLoading] = useState(false)
  
  const takeSearchInput = (e)=>{
    setSearchInput(e.target.value);
  }


  useEffect(()=>{
    (async()=>{
      try{
        
        setLoading(true)
        
        const response = await axios.get(`https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${searchInput}&numResults=20`)
        setLoading(false)
        setVideoData(response.data.results)
        console.log(response.data.results)
        return response
      }catch(error){
      setLoading(false);
      console.log(error)
      }
    })()
  },[searchInput])
  
  const value ={
    searchInput : searchInput,
    takeSearchInput : takeSearchInput,
    videoData  : videoData,
    loading:loading
  }

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
}

export const useData = ()=>useContext(dataContext)