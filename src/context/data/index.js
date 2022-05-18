import {
  useContext,
  createContext,
  useState,
} from "react";
import axios from "axios";
import { useDebounce } from "../../utils/useDebounce";
const dataContext = createContext();

export default function DataProvider({ children }) {
  const [searchInput, setSearchInput] = useState("");
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(false);

 
  const clearSearch = () => setSearchInput("");
  const fetchData = async(data) => {
    try {
      if (data === "") {
        setVideoData([]);
        return;
      }

      setLoading(true);

      const response = await axios.get(
        `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${data}&numResults=20`
      );
      setLoading(false);
      setVideoData(response.data.results);

      return response;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  const debounceFetch = useDebounce(fetchData,300)
  const takeSearchInput = (e) => {
    let text =e.target.value 
    setSearchInput(text);
    debounceFetch(text)
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
