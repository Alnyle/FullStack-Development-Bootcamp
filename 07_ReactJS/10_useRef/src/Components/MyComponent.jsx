import React, { useState, useEffect, useRef } from 'react'

const MyComponent = () => {

  const inputRef = useRef(null) // return object with property call current
  const inputRef2 = useRef(null)

  useEffect(() => {
    console.log("Component Rendered");
  })

  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
  }


  function handleClick2() {
    inputRef2.current.focus();
    inputRef.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "yellow";
  }


  return (
    <div>
        <div className="input-field">
            <button onClick={handleClick}>Click me!</button>
            <input ref={inputRef}/>
        </div>

        <div className="input-field">
            <button onClick={handleClick2}>Click me!</button>
            <input ref={inputRef2}/>
        </div>
    </div>
  )
}

export default MyComponent