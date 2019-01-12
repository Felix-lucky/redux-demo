import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addNumber,removeNumber,add} from './reducers/index';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>{this.props.num}</div>
          <button onClick={this.props.addNumber}>add</button>
          <button onClick={this.props.removeNumber}>remove</button>
          <button onClick={this.props.add}>add 2s</button>
      </div>
    );
  }
}

const stateProps=(state)=>{
  return {num:state}
}
App=connect(stateProps,{addNumber,removeNumber,add})(App);
export default App;
