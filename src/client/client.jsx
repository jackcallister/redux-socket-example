import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from '../shared/reducers'
import FieldConnector from '../shared/components/FieldConnector'

const store = createStore(reducers)

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(
    <Provider store={store}>
      <FieldConnector />
    </Provider>,
    document.getElementById('app')
  )
})
