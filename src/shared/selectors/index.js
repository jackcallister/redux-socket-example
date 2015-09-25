import { updateField, saveField } from '../actions'

export function mapStateToProps(store) {
  return {
    socket: store.socket,
    value: store.field.text
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    updateField: (msg) => { dispatch(updateField(msg)) },
    saveField: (value) => { dispatch(saveField(value)) }
  }
}
