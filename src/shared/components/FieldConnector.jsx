import React, { Component } from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../selectors'
import Field from './Field'

class FieldConnector extends Component {

  componentDidMount() {
    this.props.socket.on('message', (msg) => {
      this.props.updateField(msg)
    })
  }

  render() {
    return (
      <Field {...this.props} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FieldConnector)
