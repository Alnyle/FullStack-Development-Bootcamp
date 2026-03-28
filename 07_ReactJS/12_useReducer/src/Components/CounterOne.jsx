import React, { useReducer } from 'react';

const initialState = 0;

const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1;
            break;
        case 'decrement':
            return state - 1;
            break;
        case 'reset':
            return initialState;
        default:
            return state;
            
    }
}

const CounterOne = () => {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='CounterOne'>
        <div>Count: {count}</div>
        <div className="container-btn">
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    </div>
  )
}

export default CounterOne