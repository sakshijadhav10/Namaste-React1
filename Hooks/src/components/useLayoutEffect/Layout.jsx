import { useEffect, useLayoutEffect } from "react";


const Layout=()=>{
    useEffect(()=>{
        console.log("first time");
        
    })

    useLayoutEffect(()=>{
        console.log("second time");
        
    })
    return(
        <>
        <h1>Layout Effect</h1>
        </>
    )
}
export default Layout;