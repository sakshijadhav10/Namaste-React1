// import React from 'react'

// import { useContext } from "react"
// import { AppContext,  } from "./userContext"
import { useGlobalContext } from "./userContext";
// import React from 'react'

// const Child = (user) => {
//     const {name,age}=user;
//   return (
//     <div>
//         my name is {name} and age is {age}
//     </div>
//   )
// }
const Child = () => {
    const userData=useGlobalContext;
  return (
    <div>
        my name is {userData.name} and age is {userData.age}
    </div>
  )
}
export default Child