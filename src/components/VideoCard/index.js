import React from "react";
import "./style.css";
import {fixLink} from "../../utils/fixLink"
function VideoCard({ videoData, ...props }) {
  const { heading, video, tags, text } = videoData;
  
  return (
    <div className="videoCard">
      <iframe src={fixLink(video)} loading="lazy" title={text}></iframe>
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

export default React.memo(VideoCard);
