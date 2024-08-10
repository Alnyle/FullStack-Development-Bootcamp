import React from 'react'
import Todos from './components/Todos';
import AddTodo from './components/AddTodo'
const App = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='max-w-md'>
        <AddTodo/>
        <Todos/>
      </div>
    </div>
  )
}

export default App