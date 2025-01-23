import { useSearchParams } from "react-router-dom"

// import React from 'react'
// import { useSearchParams } from "react-router-dom";
const Filter = () => {
    const [serachParams,setSerachParams]=useSearchParams();
    console.warn(serachParams.get('age'));

     console.warn(serachParams.get('city'));
    const age=serachParams.get('age');
    const city=serachParams.get('city')
  return (
    <div>
      <h1>Filter Page</h1>
      <h3>Age is:{age}</h3>
      <h3>City is: {city}</h3>
      <button onClick={()=>{setSerachParams({age:40,city:"mumbai"})}}>Set age in query params</button>
    </div>
  )
}

export default Filter