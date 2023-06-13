import { createSlice } from '@reduxjs/toolkit'
import userList from '../data/user.data'

const userSlice = createSlice({
  name: 'user',
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
      state.push(action.payload)
    }
  }
})

export const { reducer, actions } = userSlice
