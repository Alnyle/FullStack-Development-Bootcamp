import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useContext(UserContext);


  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({username, password})
  }

  return (
    <div>
        <h1 className='text-xl text-white mb-3'>Login</h1>
        <input 
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder='Username' />
            {" "}
            <input 
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Password' />
        <button onClick={handleSubmit} className="ml-4 bg-slate-200 py-3 px-4 rounded-sm">Submit</button>
    </div>
  )
}

export default Login