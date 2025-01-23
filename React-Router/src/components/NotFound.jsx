// import React from 'react'

import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate=useNavigate()
  return (
    <div>
        <h2>The Page not found|404</h2>
        <button onClick={()=>{navigate('/')}}>Go to Home page</button>
    </div>
  )
}

export default NotFound