import { useEffect } from 'react';
import {useState} from 'react'

function UseState() {
    const [count,setCount]=useState(0);
    // useEffect(()=>{
    //     document.title=count;
    // })
    // useEffect(()=>{
    //     document.title=count;
    // },[])
    useEffect(()=>{
        document.title=count;
    },[count])
  return (

    <div>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        <button>{count}</button>
        <button onClick={()=>{count===0?setCount(0):setCount(count-1)}}>-</button>
    </div>
  )
}

export default UseState