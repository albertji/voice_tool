import React, {Component} from 'react'

export default class ContollerBar extends Component {
  constructor(props) {
    super(props)
  }
  handleMouseDown = (event)=> {
    let both = event.ctrlKey? true : false
    let type = this.props.type
    let seq = this.props.seq
    this.props.setControllerBarMode(true,{
      type: type,
      planet_seq: seq,
      both: both
    })
  }
  render() {
    let left = this.props.type? this.props.data.end : this.props.data.start
    return(
      <span className={"contollerbar "+ (this.props.type? "right" : "left")} style={{left: left+"%"}} onMouseDown={this.handleMouseDown}>
      </span>
    )
  }
}