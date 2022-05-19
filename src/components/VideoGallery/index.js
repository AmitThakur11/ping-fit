import React from "react";
import { useData } from "../../context/data";

import EmptySlide from "../EmptySlide";
import {filteredVideos} from "../../utils/filters"
import VideoCard from "../VideoCard";
import "./style.css";
function VideoGallery() {
  const { videoData, searchInput,selectedTags} = useData();
  return (
    <div className="videoGallery">
      {searchInput !== "" ? (
        <>
          <section className="videoGallery_videos">
            {filteredVideos(selectedTags,videoData).map((data) => {
              return <VideoCard key={data.heading} videoData={data} />;
            })}
          </section>
        </>
      ) : (
        <EmptySlide />
      )}
    </div>
  );
}

export default VideoGallery;
