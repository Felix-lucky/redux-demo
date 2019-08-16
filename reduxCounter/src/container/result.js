import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch } from '../actions';

const mapStateToProps = (state) => {
    return {
        result: state.result,
    }
}
//@装饰器
@connect(mapStateToProps,{ fetch })
class result extends Component {
    render() {
        const { fetch} = this.props;
        const { error,isFetching,result}=this.props.result;
        let data;
        if(error){
            data=error;
        }else if(isFetching){
            data="Loading...";
        }else{
            data=result.email;
        }
        return (
            <div>
                <h1>{data}</h1>
                <button type="button" onClick={fetch} className="btn btn-success">Success</button>
            </div>
        );
    }
}


export default result;