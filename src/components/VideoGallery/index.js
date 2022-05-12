import React from "react";
import { useData } from "../../context/data";
import EmptySlide from "../EmptySlide"
import VideoCard from "../VideoCard";
import "./style.css"
function VideoGallery() {
  const {videoData} = useData();
  
  return (
    <div className="videoGallery">
     { videoData.length ? <><section className="videoGallery_heading"></section>
      <section className="videoGallery_videos">
        {videoData.map((data) => {
          return <VideoCard  videoData = {data}/>
        })}
      </section>
      </> : <EmptySlide />}
    </div>
  );
}

export default VideoGallery;
