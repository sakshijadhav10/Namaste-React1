import { useRef } from "react";
const RefHook2=()=>{
    const inputRef=useRef();
    const changeColor=()=>{
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="blue";
    }
    return(
        <>
        <input type="text" ref={inputRef}/>
        <br />
        <button onClick={changeColor}>Submit</button>
        </>
    )
}
export default RefHook2;