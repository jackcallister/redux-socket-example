import webUtils from '../webUtils'

export function updateField(msg) {
  return {
    type: 'UPDATE_FIELD',
    payload: msg
  }
}

export function saveField(value) {

  webUtils.saveField(value)

  return {
    type: 'SAVE_FIELD',
    payload: value
  }
}
