import {useState} from "react";

export const useDebounce =(cb,delay)=>{
  let [timer,setTimer] = useState(null);
  let debounce = (...args)=>{
    if(timer){
      clearTimeout(timer)
    }
    timer = setTimeout(()=>cb(...args),delay)
    setTimer(timer)
  }
  return debounce
}