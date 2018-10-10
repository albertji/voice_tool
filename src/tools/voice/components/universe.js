import React, { Component } from 'react'
import { connect } from 'react-redux'
import Galaxy from './galaxy'
import {
  getUniverseData,
  setControllerBarMode,
  updatePlanetPosition
} from '../../../redux/actions/voice/action_voice_tool'

class Universe extends Component {
  constructor(props) {
    super(props)
    this.state = null
  }

  componentDidMount() {
    this.props.onRef(this)
    this.props.getUniverseData()
  }

  handleMouseMove = event => {
    if (this.props.controller_bar_mode) {
      this.handleGalaxyMouseMove(event)
    }
  }

  handleMouseUp = event => {
    if (this.props.controller_bar_mode) {
      this.handleGalaxyMouseUp(event)
    }
  }

  handleGalaxyMouseUp = () => {
    this.props.setControllerBarMode(false)
  }

  handleGalaxyMouseMove = event => {
    if (this.props.controller_bar_mode) {
      const universeLeft = document.getElementsByClassName('universe')[0]
        .offsetLeft
      const galaxyWidth = document.getElementsByClassName('galaxy')[0]
        .offsetWidth
      const mousex = event.pageX - 1
      const distance = mousex - universeLeft >= 0 ? mousex - universeLeft : 0
      let ratio = parseFloat(((distance / galaxyWidth) * 100).toFixed(3))
      ratio = ratio <= 100 ? ratio : 100
      this.props.updatePlanetPosition(ratio)
    }
  }

  render() {
    const galaxies = this.props.unidata.map((galaxy, index) => {
      const key = `galaxy_${index}`
      return (
        <Galaxy
          key={key}
          data={galaxy}
          galaxy_seq={index}
          handleGalaxyMouseMove={this.handleGalaxyMouseMove}
        />
      )
    })
    return (
      <div
        className="universe"
        id={this.props.id}
        onMouseMove={this.handleMouseMove}
        onMouseUp={this.handleMouseUp}
      >
        {galaxies}
      </div>
    )
  }
}

const mapStatetoProps = state => ({
  unidata: state.voice_tool.unidata,
  controller_bar_mode: state.voice_tool.controller_bar_mode
})
const mapDispatchToProps = dispatch => ({
  getUniverseData: () => dispatch(getUniverseData()),
  updatePlanetPosition: ratio => dispatch(updatePlanetPosition(ratio)),
  setControllerBarMode: (mode, info) =>
    dispatch(setControllerBarMode(mode, info))
})
export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Universe)
