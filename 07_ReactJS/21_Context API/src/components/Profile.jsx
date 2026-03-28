import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

  const {user} = useContext(UserContext)

  if (!user) return <h1>Not Logged</h1>

  return (
    <div className='text-3xl text-white'>
        profile : {user.username}  password: {user.password}
        <h1>More components</h1>
      </div>
  )
}

export default Profile