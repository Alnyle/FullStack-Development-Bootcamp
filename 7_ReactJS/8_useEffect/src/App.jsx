import React from 'react'
import './App.css'
import { useEffect } from 'react'
import { useState } from 'react';



const App = () => {
 
  // useEffect run after the content loaded on the screen

  const [input, setInput] = useState("")
  const [counter, setCounter] = useState(0);

  // use with fetch api to update UI dynamically

  useEffect(() => {
    Document.title = input
  }, [input])

  // it will run once when this component rendered for first time
  // useEffect(() => {
  //   console.log("render for the first time");
  // }, [])


  // useEffect(() => {
  //   const incrementer = setInterval(() => {
  //     setCounter((prevCount) => prevCount + 1)
  //   }, 1000);

  //   return () => clearInterval(incrementer)
  // })

  return (
    <div>
      <h2>{input}</h2>
      <h2>{counter}</h2>
      <h1 onClick={() => setCounter((prevCount) => prevCount + 1)}>useEffect 🔥</h1>
      <input onChange={(e) => setInput(e.target.value)} type=  "text" />
    </div>
  )
}



export default App