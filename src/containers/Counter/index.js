import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterAction from '../../actions/counter';

class Counter extends Component {
  componentWillMount(){
    //API REQUESTS WILL BE MADE HERE
  }

  update_counter = () => {
    this.props.incrementCounter();
  }

  render(){
    return(
      <div>
        <div>{this.props.count}</div>
        <button onClick={this.update_counter}>increment</button>
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return{
    count: state.counter.count
  };
}

var mapDispatchToProps = (dispatch) => {
  return(bindActionCreators(CounterAction, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
