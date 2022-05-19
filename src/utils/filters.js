export const selectTag = (tag,selectedTags,setSelectedTags)=>{
  if(selectedTags.includes(tag)){
    const filteredTags = selectedTags.filter((item)=>item !== tag);
    setSelectedTags(filteredTags);
    return 
  }
  setSelectedTags((tags)=>{
    return [...tags,tag]
  })
  
}


export const filteredVideos = (selectedTags,videoData)=>selectedTags.length ? videoData.filter(({tags})=>{
    
    for(let i = 0;i<tags.length;i++){
      if(selectedTags.includes(tags[i])){
        return true
      }
    }
    return false
  }) : videoData