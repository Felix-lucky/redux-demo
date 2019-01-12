
//action同步
export const addNumber=()=>{
    return {type:'INCREMENT'};
}

export const removeNumber=()=>{
    return {type:'DECREMENT'}
}
//异步用thunk
export const addNUmberAsync=()=>{
    return dispatch=>{
        setTimeout(() => {
            dispatch(addNumber());
        }, 1000);
    }
    
}

//actions 同步
export const login=()=>{
    return {type:'LOGIN'}
}
export const logout=()=>{
    return {type:'LOGOUT'}
}