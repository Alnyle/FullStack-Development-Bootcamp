import { useEffect, useState, useLayoutEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const App = () => {
 

  const [counter, setCounter] = useState(0);
  // useLayoutEffect run before the content loaded on the screen
  // useLayoutEffect run asynchronous way it's run before the content show up in the screen 
  // which mean it will block your code for a few seconds


  useLayoutEffect(() => {
    function test() {
      if (counter === 0) {
        setCounter(Math.round(Math.random() * 200))
      }
    }

    test()

  }, [counter])



  return (
    <div>
      <h2>{counter}</h2>
      <h1 onClick={() => setCounter(0)}>useLayoutEffect 🔥</h1>
    </div>
  )
}

export default App
