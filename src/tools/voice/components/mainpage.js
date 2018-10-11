import React, { Component } from 'react'
import { Button } from 'antd'
import Universe from './universe'
import Waver from './waver'
import '../assets/css/voice.css'

export default class MainPage extends Component {
  constructor(props) {
    super(props)
    this.universe = false
    this.waver = false
    this.event_handlder = false
  }

  componentDidMount() {
    this.initEventHandle()
  }

  initEventHandle = () => {}

  onUniverseRef = universe => {
    this.universe = universe
  }

  onWaverRef = waver => {
    this.waver = waver
  }

  handleKeyUp = () => {
    // console.log(event.keyCode)
  }

  render() {
    return (
      <div className="mainpage" tabIndex={0} onKeyUp={this.handleKeyUp}>
        <div className="voicecontainer">
          <Waver onRef={this.onWaverRef} />
          <Universe id="universe" onRef={this.onUniverseRef} />
          <Button
            onClick={() => {
              this.waver.zoom()
            }}
          >
            Zoom
          </Button>
        </div>
      </div>
    )
  }
}
