import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increase,subtract,login} from './actions';
import Login from './container/Login';


//获取state值
const mapStateToProps = (state, ownProps) => {
    return {
        counter: state.counter,
        auth:state.auth,
    }
}

//改变 dispatch
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increase: () => {
            dispatch(increase())
        },
        subtract: () => {
            dispatch(subtract())
        },
        login: () => {
            dispatch(login())
        },
    }
}

// {increase,subtract,login,} 等价于 mapDispatchToProps
//装饰器
@connect(mapStateToProps,{increase,subtract,login,})
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            userName:'',
            password:'',
        }
    }

    handleChange=(key,e)=>{
        this.setState({
            [key]:e.target.value,
        });
    }

    handleClick=()=>{
        const { userName,password }=this.state;
        const { history,login }=this.props;
        if(userName===''||password===''){
            return false;
        }else{
            login();
            history.push('/');
        }
    }

    render() {
        const { counter,increase,subtract}=this.props;
        const { userName,password }=this.state;
        return (
            <div>
                <h1>{counter}</h1>
                <p>
                    <button type="button" onClick={increase} className="btn btn-success">Increase</button>
                    <button type="button" onClick={subtract} className="btn btn-danger">Subtract</button>
                </p>
                {((userName==='')||(password===''))&&(<div className="alert alert-warning" role="alert">请输入用户名或密码</div>)}
                <Login handleClick={this.handleClick} handleChange={this.handleChange} />
            </div>
        );
    }
}

export default App;