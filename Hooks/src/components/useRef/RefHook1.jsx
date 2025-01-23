import { useEffect,useRef } from 'react';
import {useState} from 'react'

function RefHook1() {
    const [userInput,setUserInput]=useState("")
    // const [count,setCount]=useState();
    const count=useRef(0)
    useEffect(()=>{
    //    setCount(count+1)
        count.current=count.current+1;
})
  return (

    <div>
        <input type="text" value={userInput} onChange={(e)=>setUserInput(e.target.value)} />
    <p>the number of items comp render:{count.current}</p>
    </div>
  )
}

export default RefHook1