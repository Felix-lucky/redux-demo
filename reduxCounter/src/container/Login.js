import React, { Component } from 'react';

class Login extends Component {
    render() {
        const { handleClick,handleChange }=this.props;
        return (
            <div className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="inputEmail3" className="col-sm-2 control-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" onChange={v=>{handleChange('userName',v)}} id="inputEmail3" className="form-control"  placeholder="Name" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" onChange={v=>{handleChange('password',v)}} className="form-control" id="inputPassword3" placeholder="Password" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                    <button onClick={handleClick} className="btn btn-primary">Sign in</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;