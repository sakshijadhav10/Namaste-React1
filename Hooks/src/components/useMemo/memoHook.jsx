import { useState,useMemo } from "react";

const MemoHook=()=>{
    const [myNum,setMyNum]=useState(0);
    const [show,setShow]=useState(false);

    const getValue=()=>{
        return setMyNum(myNum+1);
    }
    const countNumber=(num)=>{
        console.log(num);
        for(let i=0;i<10000;i++){
            return num;
        }
        
    }
    // const CheckData=()=>{
    //     return countNumber(myNum);
    // }
    const CheckData=useMemo(()=>{
        return countNumber(myNum);
    },[myNum])
    return(
        <>
        <button onClick={getValue} style={{backgroundColor:"red"}}>
            Counter
        </button>
        <p>My new Number:{<CheckData/>}</p>
        <button onClick={()=>setShow(!show)}>
            {show ? "You Clicked me":"Click me plz"}
        </button>
        </>
    )
}
export default MemoHook;