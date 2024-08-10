import React from "react";
import { useState, useEffect } from 'react'
import Person from './components/Person'
import './App.css'


const App = () => {
  const user = "Omar";
  let isLogged = true;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    alert("You've changed the counter to " + counter)
  }, [counter])
  


  function increase() {
    curValue++;
  }

  function decrease() {
    curValue--;
  }

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCounter) => prevCounter - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCounter) => prevCounter + 1)}>+</button>
    </div>
  )

  // return (
  //   <div>
  //     Hello {isLogged ? user : "guest"}
  //     {user ? (
  //       <>
  //         <h1>work</h1>
  //       </>
  //     ) : (
  //       <>
  //         <h1>not work</h1>
  //       </>
  //     )}
  //   </div>
  // );
};

export default App;
