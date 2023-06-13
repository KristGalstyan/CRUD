import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import useAction from '../hooks/useAction'

const Update = () => {
  const { id } = useParams()
  const users = useSelector((state) => state.users)
  const navigate = useNavigate()

  const existingUser = users.filter((user) => user.id === +id)
  const { name, email } = existingUser[0]
  const [uname, setUname] = useState(name)
  const [uemail, setUemail] = useState(email)

  const { upDateUser } = useAction()

  const handleSubmit = (event) => {
    event.preventDefault()
    upDateUser({
      id,
      uname,
      uemail
    })
    navigate('/')
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-secondary text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="enter name"
              onChange={(e) => {
                setUname(e.target.value)
              }}
              value={uname}
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
                setUemail(e.target.value)
              }}
              value={uemail}
            />
          </div>
          <button className="btn btn-info">Update </button>
        </form>
      </div>
    </div>
  )
}

export default Update
