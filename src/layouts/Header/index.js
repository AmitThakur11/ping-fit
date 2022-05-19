import React, { useState } from "react";
import "./style.css";
import ProfileImg from "../../assets/dp.png";
import { Logo } from "../../components";
import { HiOutlineSearch, HiX } from "react-icons/hi";
import { useData } from "../../context/data";
import {selectTag} from "../../utils/filters"
function Header() {
  const [searchToggle, setSearchToggle] = useState(false);
  const { takeSearchInput, searchInput, clearSearch,getTags,videoData , setSelectedTags,selectedTags} = useData();
  
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
      <section className="videoFilters">
  {
    getTags(videoData).map((data)=>{
      return <div className ="tagItem"><input onChange ={()=>selectTag(data,selectedTags,setSelectedTags)} type='checkbox' checked = {selectedTags.includes(data)} /><span>{data}</span></div>
    })
  }
  </section>
    </header>
  );
}

export default Header;
