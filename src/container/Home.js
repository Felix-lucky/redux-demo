import React, { Component } from 'react';
import {Route,Link,Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Main from './Main';
import About from './About';
import News from './News';
import AppHome from '../App';
import {logout} from '../actions/index';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const RedirectLogin=<Redirect to='/' />;
        const App=(
            <div>
                <ul>
                    <li>
                        <Link to='/home/'>家</Link>
                    </li>
                    <li>
                        <Link to='/home/news'>新闻</Link>
                    </li>
                    <li>
                        <Link to='/home/about'>关于我们</Link>
                    </li>
                </ul>
                <div>
                    <Route exact  path="/home/" component={Main} />
                    <Route  path="/home/news" component={News} />
                    <Route  path="/home/about" component={About} />
                </div>
            </div>
        );
        return (
           <div>
               <button onClick={this.props.logout}>注销</button>
               <AppHome />
               {
                   this.props.isAuth?App:RedirectLogin
               }
           </div> 
        );
    }
}

Home=connect(state=>state.auth,{logout})(Home);

export default Home;