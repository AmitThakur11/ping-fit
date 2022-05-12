import React from "react";
import { useData } from "../../context/data";
import EmptySlide from "../EmptySlide"
import "./style.css"
function VideoGallery() {
  const {videoData} = useData();
  
  return (
    <div className="videoGallery">
     { videoData.length ? <><section className="videoGallery_heading"></section>
      <section className="videoGallery_videos">
        {videoData.map(({ heading, text, video, tags }) => {
          return (
            <div key={heading} className="videoCard">
              <iframe src={video} title={text}></iframe>
              <p className="videoCard_heading">{heading}</p>
              <ul className ="tagList">
              {
                  [...new Set(tags)].map((tag)=>{
                      return <li key={tag} className ="tag">#{tag}</li>
                  })
              }
              </ul>
            </div>
          );
        })}
      </section>
      </> : <EmptySlide/>}
    </div>
  );
}

export default VideoGallery;
