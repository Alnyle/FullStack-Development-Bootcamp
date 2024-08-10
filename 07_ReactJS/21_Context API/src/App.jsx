import React from 'react'
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

const App = () => {
  return (
    <div className='w-full h-screen flex flex-col gap-3 justify-center items-center bg-gray-800'>
      <UserContextProvider>
        <h1 className='text-3xl text-white mb-6'>React video for context API</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </div>
  )
}

export default App