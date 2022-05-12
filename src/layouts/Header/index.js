import React, { useState ,useEffect} from "react";
import axios from "axios"
import "./style.css";

import ProfileImg from "../../assets/dp.png";
import Logo  from "../../components/Logo"
import { HiOutlineSearch } from "react-icons/hi";
function Header() {
  const [searchToggle, setSearchToggle] = useState(false);
  const toggleSearchAction = ()=>setSearchToggle((searchToggle)=>!searchToggle)
  useEffect(()=>{
    (async()=>{
      
    })()
    
  })
  return (
    <header className="header">
      <section className="headerOne">
       <Logo/>
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
