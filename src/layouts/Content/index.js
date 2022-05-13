import React from "react";
import "./style.css";
import { VideoGallery, Loader } from "../../components";
import { useData } from "../../context/data";
function Content() {
  const { loading } = useData();

  return (
    <div className="content">{loading ? <Loader /> : <VideoGallery />}</div>
  );
}

export default Content;
