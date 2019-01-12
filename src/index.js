import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; //异步改变组件
import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import reducers from './reducers/index';
import Auth from './container/Auth';
import Home from './container/Home';

const store=createStore(reducers,applyMiddleware(thunk));
    
    ReactDOM.render(
        (
            <Provider store={store}>
            <Router>
                <Switch>
                {/* <App /> */}
                    <Route path='/' exact   component={Auth}></Route>
                    <Route path='/home' component={Home}></Route>
                </Switch>
            </Router>
                
            </Provider>
        ), document.getElementById('root'));

