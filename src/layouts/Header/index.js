import React, { useState } from "react";
import "./style.css";
import ProfileImg from "../../assets/dp.png";
import { Logo } from "../../components";
import { HiOutlineSearch, HiX } from "react-icons/hi";
import { useData } from "../../context/data";

function Header() {
  const [searchToggle, setSearchToggle] = useState(false);
  const { takeSearchInput, searchInput, clearSearch } = useData();
  const toggleSearchAction = () =>
    setSearchToggle((searchToggle) => !searchToggle);
  const closeSearchBar = () => {
    clearSearch();
    toggleSearchAction();
  };

  return (
    <header className="header">
    
      <section className="headerOne">
        <Logo />
       
      </section>
      <section className="headerTwo">
        <input
          value={searchInput}
          className={!searchToggle ? "search searchHide" : "search"}
          onChange={(e) => takeSearchInput(e)}
          placeholder="Search..."
        />
        <span className="abort" onClick={() => closeSearchBar()}>
          {searchInput !== "" && <HiX />}
        </span>
      </section>
      <section className="headerThree">
        <span onClick={toggleSearchAction}>
          {!searchToggle ? <HiOutlineSearch /> : <HiX />}
        </span>
        <img src={ProfileImg} alt="profile" />
      </section>
    </header>
  );
}

export default Header;
