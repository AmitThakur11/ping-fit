import React from "react";
import Logo from "../../assets/logo.png";
import "./style.css";
function Loader() {
  return (
    <div className="loader">
      <img src={Logo} alt="loader" />
    </div>
  );
}

export default Loader;
