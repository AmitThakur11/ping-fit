import React, { useState} from "react";
import "./style.css";
import ProfileImg from "../../assets/dp.png";
import {Logo}  from "../../components"
import { HiOutlineSearch } from "react-icons/hi";
import {useData} from "../../context/data"
function Header() {
  const [searchToggle, setSearchToggle] = useState(false);
  const {takeSearchInput} = useData()
  const toggleSearchAction = ()=>setSearchToggle((searchToggle)=>!searchToggle)

  return (
    <header className="header">
      <section className="headerOne">
       <Logo/>
      </section>
      <section className="headerTwo">
        <input className={!searchToggle ? "search searchHide" : "search"}  onChange = {(e)=>takeSearchInput(e)} placeholder="Search..." />
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
