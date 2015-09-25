const initialState = {
  text: null
}

export default function field(state = initialState, action) {
  switch(action.type) {
    case 'UPDATE_FIELD':
      return {
        text: action.payload
      }

    default:
      return state
  }
}
