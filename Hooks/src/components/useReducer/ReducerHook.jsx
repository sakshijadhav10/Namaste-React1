// import React from 'react'

import { useReducer } from "react"
import reducer from "./reducer";
const initialvalue=0;

export const ReducerHook = () => {
    const [count,dispatch]=useReducer(reducer,initialvalue)
  return (
    <div>
        <button onClick={()=>dispatch({type:"INC"})}>+</button>
        <button>{count}</button>
        <button onClick={()=>dispatch({type:"DEC"})}>-</button>
    </div>
  )
}
