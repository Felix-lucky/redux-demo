const ADD_NUMBER = 'INCREMENT';
const REMOVE_NUMBER='DECREMENT';
//reducers
export const counter=(state=0,action)=>{
    switch(action.type){
        case ADD_NUMBER:
            return state+1;
        case REMOVE_NUMBER:
            return state-1;
        default :
        return state;
    }
}

//action
export const addNumber=()=>{
    return {type:ADD_NUMBER};
}

export const removeNumber=()=>{
    return {type:REMOVE_NUMBER}
}
//异步用thunk
export const add=()=>{
    return dispatch=>{
        setTimeout(() => {
            dispatch(addNumber());
        }, 1000);
    }
    
}