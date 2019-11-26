import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import './styles.scss';

const InitialState = {
  count: 0,
};

const IncrementValue = () => ({
  type: 'INCREMENT',
});

const DecrementValue =()=>({
  type:'DECREMENT'
})
const Reset=()=>({
  type:'RESET'
})

const reducer = (state = InitialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      count: state.count + 1,
    };
  }
  if(action.type === 'DECREMENT'){
    return{
      count:state.count-1,
    }
  }
  if(action.type === 'RESET'){
    return{
      count:0
    }
  }
  return state;
};
const store = createStore(reducer);

class Counter extends Component {
  render() {
    const { count, increment,decrement,reset } = this.props;
    console.log({ count, increment,decrement,reset });
    return (
      <main className="Counter">
        <p className="count">{count}</p>
        <section className="controls">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </section>
      </main>
    );
  }
}
const mapStatetoProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    increment() {
      dispatch(IncrementValue());
    },
    decrement(){
      dispatch(DecrementValue())
    },
    reset(){
      dispatch(Reset())
    }
  };
};
const CounterContainer = connect(mapStatetoProps, mapDispatchToProps)(Counter);
render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root'),
);
