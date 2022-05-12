import React from "react";
import "./style.css";
import EmptyImg from "../../assets/empty.svg";

function EmptySlide() {
  return (
    <div className="emptySlide">
      <div className="emptySlide_data">
        <section className="emptySlide_text">
          <p>
            Find your perfect workout <span className="highlight">NOW</span>...
          </p>
        </section>

        <section className="emptySlide_img">
          <img src={EmptyImg} alt="empty" />
        </section>
      </div>
    </div>
  );
}

export default EmptySlide;
