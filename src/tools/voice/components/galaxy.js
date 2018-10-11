import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import Planet from './planet'
import ContollerBar from './contollerbar'
import {
  updatePlanetData,
  setControllerBarMode
} from '../../../redux/actions/voice/action_voice_tool'

/* const AttrName =(props)=>{
  return (
    <div className={"attrname"}>{props.cname}</div>
  )
} */

class Galaxy extends Component {
  constructor(props) {
    super(props)
    this.state = null
  }

  setControllerBarMode = (mode, info) => {
    const infos = {
      ...info,
      galaxy_seq: this.props.galaxy_seq
    }
    this.props.setControllerBarMode(mode, infos)
  }

  updatePlanetData = (val, planetSeq) => {
    const galaxySeq = this.props.galaxy_seq
    this.props.updatePlanetData(val, galaxySeq, planetSeq)
  }

  render() {
    const planets = this.props.data.list.map((planet, index) => {
      const key = `planet_${this.props.galaxy_seq}_${index}`
      return (
        <Planet
          key={key}
          data={planet}
          updatePlanetData={this.updatePlanetData}
          planet_seq={index}
        />
      )
    })
    const contollerBars = []
    this.props.data.list.map((planet, index) => {
      const keyLeft = `contollerbar_left_${index}`
      const keyRight = `contollerbar_right_${index}`
      contollerBars.push(
        <ContollerBar
          key={keyLeft}
          setControllerBarMode={this.setControllerBarMode}
          data={planet}
          type={0}
          seq={index}
        />
      )
      contollerBars.push(
        <ContollerBar
          key={keyRight}
          setControllerBarMode={this.setControllerBarMode}
          data={planet}
          type={1}
          seq={index}
        />
      )
      return false
    })
    return (
      <Row align="middle" justify="center">
        <Col span={24}>
          <div className="galaxy">
            {planets}
            {contollerBars}
          </div>
        </Col>
        {/*        <Col span={2}>
          <AttrName cname={this.props.data.name}></AttrName>
        </Col> */}
      </Row>
    )
  }
}

const mapStatetoProps = state => ({
  controller_bar_mode: state.voice_tool.controller_bar_mode
})
const mapDispatchToProps = dispatch => ({
  updatePlanetData: (val, galaxySeq, planetSeq) =>
    dispatch(updatePlanetData(val, galaxySeq, planetSeq)),
  setControllerBarMode: (mode, info) =>
    dispatch(setControllerBarMode(mode, info))
})
export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(Galaxy)
