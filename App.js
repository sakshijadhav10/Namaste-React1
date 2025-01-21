import React from "react";
import ReactDOM from "react-dom/client"
import '/index.css'

 

const ele=<span>React Element</span>
const Title=()=>(<h1 id="heading">Hello {ele}</h1>);
const number=1000;
// functional Components
const HeadingComp=()=>{
    return(
        <>
        <div>
        {Title()}
        <Title/>
        <h2>{number}</h2>
        <h1>Namaste React</h1>
        </div>
        </>
    )
    
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<HeadingComp/>)