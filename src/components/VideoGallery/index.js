import React from "react";
import { useData } from "../../context/data";
import EmptySlide from "../EmptySlide"
import VideoCard from "../VideoCard";
import "./style.css"
function VideoGallery() {
  const {videoData,searchInput} = useData();
  
  return (
    <div className="videoGallery">
     { searchInput !== "" ? <><section className="videoGallery_heading"></section>
      <section className="videoGallery_videos">
        {videoData.map((data) => {
          return <VideoCard key ={data.heading} videoData = {data}/>
        })}
      </section>
      </> : <EmptySlide />}
    </div>
  );
}

export default VideoGallery;
