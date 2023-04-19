import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { updateUser } from '../../features/auth/user.slice'

export const Home = () => {
  //TODO: Implement React Hook Form
  const [firstName, setFirstname] = useState<string>('')
  const { first_name } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const handleAddFile = () => {
    dispatch(updateUser(firstName))
  }

  return (
    <div>
      <p>{first_name}</p>
      <input placeholder='Enter first name' onChange={(e) => setFirstname(e.target.value)} />
      <button onClick={handleAddFile}>Add first name to store</button>
    </div>
  )
}
