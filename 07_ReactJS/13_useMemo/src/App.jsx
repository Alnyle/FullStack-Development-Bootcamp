import React, {useState, useMemo} from 'react'

// useMemo: return a memorized value and prevent the application 
//          from unnecessary re-render


// when to use useMemo hook ?
//  - useful in heavy computational 
//    processes when using functional components

function squareNum(n) {
  console.log("Squaring will be done!");
  return Math.pow(n, 2);
}

const App = () => {

  const [number, setNumber] = useState(0);
  const squaredNum = useMemo(() => {
    return (squareNum(number))
  }, [number])
  const [counter, setCounter] = useState(0);

  const onChangeHandler = (e) => {
    setNumber(e.target.value);
  };


  const counterHandler = () => {
    setCounter(counter + 1);
  }

  return (
    <div>
      <h1>Welcome to Geeksforgeeks</h1> 
      <input
          placeholder='Enter a number'
          value={number}
          onChange={onChangeHandler} 
          type="number" />   

          <div>OUTPUT: {squaredNum}</div>
          <button onClick={counterHandler}>counter ++</button>
          <div>Counter: {counter}</div>
    </div>
  )
}

export default App