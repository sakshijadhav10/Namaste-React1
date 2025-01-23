import { createContext, useContext } from "react";

const AppContext=createContext();
// eslint-disable-next-line react/prop-types
const AppProvider=({children})=>{
    const userData={
        name:"sakshi",
        age:20
    }
    return <AppContext.Provider value={userData}>{children}</AppContext.Provider>
}
// custome hook
const useGlobalContext=()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider,useGlobalContext}