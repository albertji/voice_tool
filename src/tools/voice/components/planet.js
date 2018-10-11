import React, { Component } from 'react'

export default class Planet extends Component {
  constructor(props) {
    super(props)
    this.state = null
  }

  handleChange = event => {
    // let galaxy_seq = this.props.galaxy_seq
    const planetSeq = this.props.planet_seq
    const val = event.target.value
    this.props.updatePlanetData(val, planetSeq)
  }

  render() {
    const { start } = this.props.data
    const width = this.props.data.end - this.props.data.start
    return (
      <span
        className="planet"
        style={{ width: `${width}%`, left: `${start}%` }}
      >
        <input
          value={this.props.data.val}
          onChange={this.handleChange}
          onKeyUp={event => {
            event.stopPropagation()
          }}
        />
      </span>
    )
  }
}
