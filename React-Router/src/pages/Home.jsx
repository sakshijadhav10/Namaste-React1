// import React from 'react'
import { useLocation } from "react-router-dom"
const Home = () => {
  const location=useLocation();
  console.log(location);
  
  return (
    <div><h1>Home Page</h1></div>
  )
}

export default Home