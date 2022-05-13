import React from 'react'
import "./style.css"
import LogoImg from "../../assets/logo.png";
function Logo() {
  return (
    <div className="logo">
          <img className="logoImg" src={LogoImg} alt="logo" />
          <div className="logoName">
            <p className="logoName_first">NOW</p>
            <p className="logoName_last ">FIT</p>
          </div>
        </div>
  )
}

export default Logo