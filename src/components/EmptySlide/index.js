import React from "react";

import EmptyImg from "../../assets/empty.svg";

function EmptySlide() {
  return (
    <div className="emptySlide">
      <section className="emptySlide__img">
        <img src={EmptyImg} alt="empty" />
      </section>
      <section>
        <p>Find your perfect workout...</p>
      </section>
    </div>
  );
}

export default EmptySlide;
