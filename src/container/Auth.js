import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {login} from '../actions/index';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                {this.props.isAuth?<Redirect to='/home/' />:null}
                <h3>你没有权限，需要登录才能看</h3>
                <button onClick={this.props.login}>登录</button>
            </div>
        );
    }
}

Auth=connect(state=>state.auth,{login})(Auth);

export default Auth;