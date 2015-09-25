import { combineReducers } from 'redux'
import field from './fieldReducer'
import socket from './socketReducer'

export default combineReducers({
  field,
  socket,
})
