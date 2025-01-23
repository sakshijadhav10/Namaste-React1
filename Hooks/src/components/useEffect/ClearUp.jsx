// import React from 'react'

import { useEffect } from "react"
import { useState } from "react"

function ClearUp() {
  const [windowSize,setWindowSize]=useState(window.screen.width)
 
  const currentWindowSize=()=>{
    setWindowSize(()=>{
      window.innerWidth
    })
 }
  useEffect(()=>{
    window.addEventListener("resize",currentWindowSize)
    return(()=>{
      window.removeEventListener("resize",currentWindowSize)
    })
  })
  return (
    <div>
        <h1>The size of the window is <span>{windowSize}</span></h1>
    </div>
  )
}

export default ClearUp