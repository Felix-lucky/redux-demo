import { INCREASE,SUBTRACT } from '../actions/actionType';

/**
 * 初始化state值
 * @param {*} state 
 * @param {*} action 
 */

const reducer=( state=0, action )=>{
    switch(action.type){
        case INCREASE:
            return state+1;
        case SUBTRACT:
            return state-1;
        default:
            return state;
    }
}


export default reducer;