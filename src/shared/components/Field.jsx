import React, { Component } from 'react'

export default class Field extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: null
    }
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h6>The Field</h6>
        <textarea value={this.props.value} />

        <div>
          <textarea value={this.state.value} onChange={(e) => { this.handleChange(e)}}/>
          <button onClick={(e) => { this.props.saveField(this.state.value) }}>Save</button>
        </div>
      </div>
    )
  }
}
