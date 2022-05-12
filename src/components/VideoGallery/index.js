import React from "react";
import { useData } from "../../context/data";
import "./style.css"
function VideoGallery() {
  const { data } = useData();
  return (
    <div className="videoGallery">
      <section className="videoGallery_heading"></section>
      <section className="videoGallery_videos">
        {data.results.map(({ heading, text, video, tags }) => {
          return (
            <div key={heading} className="videoCard">
              <iframe src={video} title={text}></iframe>
              <p className="videoCard_heading">{heading}</p>
              <ul className ="tagList">
              {
                  [...new Set(tags)].map((tag)=>{
                      return <li className ="tag">#{tag}</li>
                  })
              }
              </ul>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default VideoGallery;
