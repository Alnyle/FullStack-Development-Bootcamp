import React from 'react'

const Person = ({firstName = 'Ahmed', lastName = 'Elniel', age = 30}) => {
  return (
    <div>
        <h1>{firstName}</h1>
        <h2>{lastName}</h2>
        <h2>{age}</h2>
    </div>
  )
}

export default Person