import { createStore,applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //调试工具
import logger from 'redux-logger'; //打印日志中间件
import thunk from 'redux-thunk';  //异步请求中间件
import Reducers from './reducers';


let store;

if(process.env.NODE_ENV!=="production"){
    store=createStore(Reducers,composeWithDevTools(applyMiddleware(logger,thunk)));
}else{
    store=createStore(Reducers,composeWithDevTools(applyMiddleware(thunk)));
}

export default store;
