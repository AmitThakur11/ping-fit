import React, { useState ,useEffect} from "react";
import axios from "axios"
import "./style.css";
import Logo from "../../assets/logo.png";
import ProfileImg from "../../assets/dp.png";
import { HiOutlineSearch } from "react-icons/hi";
function Header() {
  const [searchToggle, setSearchToggle] = useState(false);
  const toggleSearchAction = ()=>setSearchToggle((searchToggle)=>!searchToggle)
  useEffect(()=>{
    (async()=>{
      const response = await axios.get("https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos")
      console.log(response)
    })()
    
  })
  return (
    <header className="header">
      <section className="headerOne">
        <div className="logo">
          <img className="logoImg" src={Logo} alt="logo" />
          <div className="logoName">
            <p className="logoName_first">NOW</p>
            <p className="logoName_last ">FIT</p>
          </div>
        </div>
      </section>
      <section className="headerTwo">
        <input className={!searchToggle ? "search searchHide" : "search"} placeholder="Search..." />
      </section>
      <section className="headerThree">
        <span onClick={toggleSearchAction}>
          <HiOutlineSearch />
        </span>
        <img src={ProfileImg} alt="profile" />
      </section>
    </header>
  );
}

export default Header;
