// /* eslint-disable react/prop-types */
// // import React from 'react'

import Child from "./Child";

const Parent = () => {
    // const {name,age}=user;
  return (
    <div>
        {/* my name is {name} and age is {age}
        <Child {...user}/> */}
        <h2>Parent Comp</h2>
        <Child/>
    </div>
  )
}
export default Parent