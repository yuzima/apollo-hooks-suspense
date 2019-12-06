import React from 'react'
import { useGetUser } from './query' 
import { wrapQuery } from './wrapFetch'

function User() {
  const { data, refetch } = wrapQuery(useGetUser())
  const { randomUser: { name, gender, email } } = data
  const handleClick = () => {
    refetch()
  }
  return (
    <div>
      <p>
        {name.title} {name.first} {name.last} {gender} {email}
        <button onClick={handleClick}>Click to refetch user</button>
      </p>
    </div>
  )
}

export default User