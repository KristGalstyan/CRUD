import { createSlice } from '@reduxjs/toolkit'
import userList from '../data/user.data'

const userSlice = createSlice({
  name: 'user',
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    },
    upDateUser: (state, action) => {
      const { id, uemail, uname } = action.payload

      const userFind = state.find((user) => user.id === +id)
      if (userFind) {
        userFind.name = uname
        userFind.email = uemail
      }
    }
  }
})

export const { reducer, actions } = userSlice
