import React from "react";
import "./style.css";
function VideoCard({ videoData, ...props }) {
  const { heading, video, tags, text } = videoData;
  const fixUrl = (url) => {
    return "https" + url.split("").splice(4).join("");
  };
  return (
    <div className="videoCard">
      <iframe src={fixUrl(video)} loading="lazy" title={text}></iframe>
      <p className="videoCard_heading">{heading}</p>
      <ul className="tagList">
        {[...new Set(tags)].map((tag) => {
          return (
            <li key={tag} className="tag">
              #{tag}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default VideoCard;
