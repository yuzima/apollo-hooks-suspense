import React from 'react'
import { wrapQuery } from './wrapFetch'
import { useLazyGetUser } from './query'

const emptyData = { 
  randomUser: {
    name: {
      title: '',
      first: '',
      last: ''
    },
    gender: '',
    email: ''
  } 
}

function LazyUser() {
  const [ getUser, { data } ]= wrapQuery(useLazyGetUser())
  const { randomUser: { name, gender, email } } = data || emptyData

  const handleClick = () => {
    getUser()
  }

  return (
    <div>
      <p>{name.title} {name.first} {name.last} {gender} {email}</p>
      <button onClick={handleClick}>Click to fetch</button>
    </div>
  )
}

export default LazyUser