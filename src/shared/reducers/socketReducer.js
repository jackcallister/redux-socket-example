import io from 'socket.io-client'

const initialState = io('http://localhost:3000')

export default function socket(state = initialState) {
  return state
}
