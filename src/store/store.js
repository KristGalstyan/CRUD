import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as UserReducer } from './user.slice'

const rootReducer = combineReducers({
  users: UserReducer
})

const store = configureStore({
  reducer: rootReducer
})
export default store
