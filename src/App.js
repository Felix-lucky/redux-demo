import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addNumber,removeNumber,addNUmberAsync} from './actions/index';


class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div >
          <div>{this.props.num}</div>
          <button onClick={this.props.addNumber}>add</button>
          <button onClick={this.props.removeNumber}>remove</button>
          <button onClick={this.props.addNUmberAsync}>addNUmberAsync</button>
      </div>
    );
  }
}

App=connect(state=>({num:state.counter}),{addNumber,removeNumber,addNUmberAsync})(App);

export default App;
