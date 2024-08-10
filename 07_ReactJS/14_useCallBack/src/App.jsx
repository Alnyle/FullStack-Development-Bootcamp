import React, { useState, useCallback } from "react";
var funccount = new Set();

// Note : Memoization (store it in the cache) is like storing the
//        values as cache that need not to be calculated again and again.


// useCallback: return a memorized function to reduce unnecessary callBacks

// when we should use useCallback ?
// when you to have a component in which the child rendering again and agin 
// is unnecessary


const App = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  const incrementCounter = useCallback(() => {
      setCount(count + 1);
  }, [count]);
  const decrementCounter = useCallback(() => {
      setCount(count - 1);
  }, [count]);
  const incrementNumber = useCallback(() => {
      setNumber(number + 1);
  }, [number]);

  funccount.add(incrementCounter);
  funccount.add(decrementCounter);
  funccount.add(incrementNumber);
  return (
      <div
          style={{
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
              justifyContent: "end",
              margin: "auto",
              marginTop: "20px",
              width: "350px",
              padding: "50px",
              height: "300px",
              fontSize: "20px",
              boxShadow: "0px 2px 8px 4px grey",
              borderRadius: "5px",
          }}
      >
          {" "}
          <h2 style={{ color: "green" }}>
              GeeksforGeeks
          </h2>
          <h4>React Example for useCallback Hook</h4>
          <p>Count: {count}</p>
          <p>Function Count: {funccount.size}</p>
          <button onClick={incrementCounter}>
              Increase counter
          </button>
          <button onClick={decrementCounter}>
              Decrease Counter
          </button>
          <button onClick={incrementNumber}>
              Increase number
          </button>
      </div>
  );
}

export default App