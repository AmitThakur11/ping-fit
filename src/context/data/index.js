import {
  useContext,
  createContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import axios from "axios";

const dataContext = createContext();

export default function DataProvider({ children }) {
  const [searchInput, setSearchInput] = useState("");
  const [videoData, setVideoData] = useState([]);
  const [loading, setLoading] = useState(false);

  const takeSearchInput = (e) => {
    setSearchInput(e.target.value);
  };
  const clearSearch = () => setSearchInput("");
  async function fetchData() {
    try {
      if (searchInput === "") {
        setVideoData([]);
        return;
      }

      setLoading(true);

      const response = await axios.get(
        `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${searchInput}&numResults=20`
      );
      setLoading(false);
      setVideoData(response.data.results);

      return response;
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  const opFetch = useCallback(fetchData, [searchInput]);

  useEffect(() => {
    (() => opFetch())();
  }, [opFetch]);

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
