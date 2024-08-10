import React, { useReducer } from 'react';

const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { firstCounter: firstCounter + 1 };
            break;
        case 'decrement':
          return { firstCounter: firstCounter - 1 };
          break;
        case 'reset':
          return { firstCounter: 0 };

        default:
          return { firstCounter: firstCounter };

    }
}

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div className='CounterOne'>
        <div>Count: {count.firstCounter}</div>
        <div className="container-btn">
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    </div>
  )
}

export default CounterTwo