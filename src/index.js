import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; //异步改变组件
import {Provider} from 'react-redux';
import App from './App';
import {counter} from './reducers/index';
import * as serviceWorker from './serviceWorker';

const store=createStore(counter,applyMiddleware(thunk));
    ReactDOM.render(
        (
            <Provider store={store}>
                <App />
            </Provider>
        ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
