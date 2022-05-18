import {
  useContext,
  createContext,
  useState
} from "react";
import axios from "axios";

const dataContext = createContext();

export default function DataProvider({ children }) {
  const [searchInput, setSearchInput] = useState("");
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(false);

  
  const clearSearch = () => setSearchInput("");
  async function fetchData(searchText) {
    try {
      if (searchText.trim().length === 0 || searchInput === "") {
        setVideoData([])
        return;
      }

      setLoading(true);

      const response = await axios.get(
        `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${searchText}&numResults=20`
      );
      setLoading(false);
      setVideoData(response.data.results);

      return response;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }
  const takeSearchInput = (e) => {
    let searchItem = e.target.value
    setSearchInput(searchItem);
    fetchData(searchItem)
  };


  const value = {
    searchInput: searchInput,
    takeSearchInput: takeSearchInput,
    videoData: videoData,
    loading: loading,
    clearSearch: clearSearch,
  };

  return <dataContext.Provider value={value}>{children}</dataContext.Provider>;
}

export const useData = () => useContext(dataContext);
