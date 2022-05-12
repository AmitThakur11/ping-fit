import React from 'react'
import "./style.css"
import {EmptySlide} from "../../components"
import {useData} from "../../context/data"
function Content() {
    const {searchResult} = useData()
    console.log(searchResult)
  return (
    <div className ="content">
    <EmptySlide/>
    </div>
  )
}

export default Content