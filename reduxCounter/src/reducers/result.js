import { FETCH_SUCCESS,FETCH_RESPONSE,FECTH_FAILURE} from '../actions/actionType';



/**
 * 初始化state值
 * @param {*} state 
 * @param {*} action 
 */
const initState={
    isFetching:false,
    error:null,
    result:{},
}
const reducer=(state=initState,action)=>{
    switch(action.type){
        case FETCH_SUCCESS:
            return {
                error:null,
                isFetching:false,
                result:action.params,
            };
        case FETCH_RESPONSE:
            return {
                error:null,
                isFetching:true,
                result:{},
            };
        case FECTH_FAILURE:
            return {
                result:{},
                isFetching:false,
                error:action.error,
            };
        default:
            return state;
    }
} 

export default reducer;