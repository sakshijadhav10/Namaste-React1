const reducer=(state,action)=>{
    if(action.type==="INC"){
        return(state=state+1)
    }
    if(action.type==="DEC"){
        // return (state=state-1)
        let newNum=0;
        state >=1 ?(newNum=state-1):(newNum=0);
        return newNum
    }
    return state;
}

export default reducer