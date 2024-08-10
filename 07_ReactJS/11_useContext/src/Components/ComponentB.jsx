import React, { useContext } from 'react'
import ComponentC from './ComponentC'

import { UserContext } from './ComponentA.jsx'

const ComponentB = () => {

  const user = useContext(UserContext);

  return (
    <div className='box'>
        <h1>ComponentB</h1>
        <h2>{`Welcome ${user}`}</h2>
        <ComponentC/>
    </div>
  )
}

export default ComponentB