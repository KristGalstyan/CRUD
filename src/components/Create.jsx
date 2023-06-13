import React, { useState } from 'react'
import useAction from '../hooks/useAction'
import { useSelector } from 'react-redux'

function Create() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const { addUser } = useAction()

  const users = useSelector((user) => user.users)
  console.log(users)
  const handleSubmit = (event) => {
    event.preventDefault()
    addUser({ name, email, id: users[users.length - 1].id + 1 })
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="enter name"
              onChange={(e) => {
                setName(e.target.value)
              }}
              value={name}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="enter email"
              onChange={(e) => {
                setEmail(e.target.value)
              }}
              value={email}
            />
          </div>
          <button className="btn btn-info">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create
