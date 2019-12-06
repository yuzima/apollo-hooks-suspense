import React from 'react'
import { useGetUser } from './query' 
import { wrapQuery } from './wrapFetch'

function User() {
  const { data } = wrapQuery(useGetUser())
  const { randomUser: { name, gender, email } } = data
  return (
    <div>
      <p>{name.title} {name.first} {name.last}</p>
      <p>{gender}</p>
      <p>{email}</p>
    </div>
  )
}

export default User