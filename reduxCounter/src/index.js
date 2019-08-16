import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import store from './store';
import App from './App';
import Home from './container/Home';
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' component={App} />
            </Switch>
        </Router>
    </Provider>
    , 
    document.getElementById('root'));

