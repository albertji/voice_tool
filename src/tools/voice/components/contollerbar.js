import React, { Component } from 'react'

export default class ContollerBar extends Component {
  constructor(props) {
    super(props)
    this.state = null
  }

  handleMouseDown = event => {
    const both = event.ctrlKey
    const { type, seq } = this.props
    this.props.setControllerBarMode(true, {
      type,
      planet_seq: seq,
      both
    })
  }

  render() {
    const left = this.props.type ? this.props.data.end : this.props.data.start
    const className = `contollerbar ${this.props.type ? 'right' : 'left'}`
    return (
      <span
        className={className}
        style={{ left: `${left}%` }}
        onMouseDown={this.handleMouseDown}
      />
    )
  }
}
