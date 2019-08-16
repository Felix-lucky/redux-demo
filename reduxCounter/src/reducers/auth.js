import { LOGIN,LOGOUT } from '../actions/actionType';

/**
 * 初始化state值
 * @param {*} state 
 * @param {*} action  获取对应的action
 */
const reducer=(state=false,action)=>{
    switch(action.type){
        case LOGIN:
            return state=true;
        case LOGOUT:
            return state=false;
        default:
            return state;
    }
}

export default reducer;