import React, { Component } from 'react'
import { Row, Col } from 'antd'
import Planet from "./planet"
import ContollerBar from "./contollerbar"
import {
  updatePlanetData,
  setControllerBarMode
} from "../../../redux/actions/voice/action_voice_tool";
import {connect} from "react-redux";

/*const AttrName =(props)=>{
  return (
    <div className={"attrname"}>{props.cname}</div>
  )
}*/

class Galaxy extends Component {
  constructor(props) {
    super(props)
  }
  setControllerBarMode = (mode,info)=>{
    let infos = {
      ...info,
      galaxy_seq: this.props.galaxy_seq
    }
    this.props.setControllerBarMode(mode,infos)
  }
  updatePlanetData = (val,planet_seq)=>{
    let galaxy_seq = this.props.galaxy_seq
    this.props.updatePlanetData(val,galaxy_seq,planet_seq)
  }
  render() {
    let planets = this.props.data.list.map((planet,index)=>{
      return (
        <Planet key={"planet_"+this.props.galaxy_seq+"_"+index} data={planet} updatePlanetData={this.updatePlanetData} planet_seq={index}></Planet>
      )
    })
    let contoller_bars = []
    this.props.data.list.map((planet,index)=>{
      contoller_bars.push(
        <ContollerBar key={"contollerbar_left_"+index} setControllerBarMode={this.setControllerBarMode} data={planet} type={0} seq={index}></ContollerBar>
      )
      contoller_bars.push(
        <ContollerBar key={"contollerbar_right_"+index} setControllerBarMode={this.setControllerBarMode} data={planet} type={1} seq={index}></ContollerBar>
      )
    })
    return(
      <Row align="middle" justify="center">
        <Col span={24}>
          <div className="galaxy">
            {planets}
            {contoller_bars}
          </div>
        </Col>
{/*        <Col span={2}>
          <AttrName cname={this.props.data.name}></AttrName>
        </Col>*/}
      </Row>
    )
  }
}

const mapStatetoProps = (state) => {
  return {
    controller_bar_mode: state.voice_tool.controller_bar_mode
  }
}
const mapDispatchToProps = dispatch => {
  return {
    updatePlanetData: (val,galaxy_seq,planet_seq)=> {
      return dispatch(updatePlanetData(val,galaxy_seq,planet_seq))
    },
    setControllerBarMode: (mode,info)=>{
      return dispatch(setControllerBarMode(mode,info))
    },
  }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Galaxy)