import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../actions';
import Result from './result';

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        // counter:state.counter,
    }
}

@connect(mapStateToProps,{logout})
class Home extends Component {
    render() {
        const { auth,logout }=this.props;

            if(!auth) {
                return  <Redirect to='/login' />;
            };
        return (
            <div className="jumbotron">
                <h1>Home</h1>
                <button type="button" onClick={logout} className="btn btn-primary">Logout</button>
                <Result />
            </div>
        );
    }
}



export default Home;