import { INCREASE,SUBTRACT,LOGIN,LOGOUT,FETCH_SUCCESS,FETCH_RESPONSE,FECTH_FAILURE} from './actionType';
import server from '../utils/api';

/**
 * 增加
 */
export const increase=()=>({
    type:INCREASE,
});

/**
 * 减少
 */
export const subtract=()=>({
    type:SUBTRACT,
});

/**
 * 登陆
 */
export const login=()=>({
    type:LOGIN,
});

/**
 * 登出
 */
export const logout=()=>({
    type:LOGOUT,
});

/**
 * 异步获取邮箱地址
 * @param {*} user 
 */
export const result=(params)=>({
    type:FETCH_SUCCESS,
    params,
});

export const response=()=>({
    type:FETCH_RESPONSE,
});

export const failure=(error)=>({
    type:FECTH_FAILURE,
    error,
});

//异步请求 get
export const fetch=()=>{
    return dispatch=>{
        dispatch(response());
        server.get().then(res=>{
            dispatch(result(res.data.results[0]));
        })
        .catch(error=>{
            console.log(error)
           dispatch(failure(error.data));
        })
    }
}