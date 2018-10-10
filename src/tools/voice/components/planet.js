import React, {Component} from 'react'

export default class Planet extends Component {
    constructor(props) {
        super(props)
    }
    handleChange = (event)=>{
        let galaxy_seq = this.props.galaxy_seq
        let planet_seq = this.props.planet_seq
        let val = event.target.value
        this.props.updatePlanetData(val,planet_seq)
    }
    render() {
        const start = this.props.data.start
        const width = this.props.data.end-this.props.data.start
        return(
            <span className="planet" style={{width: width+"%",left:start+"%"}}>
                <input value={this.props.data.val} onChange={this.handleChange} onKeyUp={(event)=>{event.stopPropagation()}}></input>
            </span>
        )
    }
}