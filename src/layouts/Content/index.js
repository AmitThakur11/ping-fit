import React from 'react'
import "./style.css"
import {EmptySlide,VideoGallery} from "../../components"
import {useData} from "../../context/data"
function Content() {
    const {data} = useData()
    
  return (
    <div className ="content">
    <VideoGallery/>
    </div>
  )
}

export default Content