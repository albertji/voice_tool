import React, {Component} from 'react'
import {connect} from "react-redux";
import Galaxy from "./galaxy"
import {
    getUniverseData, setControllerBarMode,
    updatePlanetPosition
} from "../../../redux/actions/voice/action_voice_tool"


class Universe extends Component {
    constructor(props) {
        super(props)
/*        this.state= {
            data: props.unidata
        }*/
    }
    componentDidMount(){
        this.props.onRef(this)
        this.props.getUniverseData()
    }
    handleMouseMove = (event)=>{
        if(this.props.controller_bar_mode){
            this.handleGalaxyMouseMove(event)
        }
    }
    handleMouseUp = ()=>{
        if(this.props.controller_bar_mode){
            this.handleGalaxyMouseUp(event)
        }
    }
    handleGalaxyMouseUp = (event)=>{
        this.props.setControllerBarMode(false)
    }
    handleGalaxyMouseMove = (event)=>{
        if(this.props.controller_bar_mode){
            let universe_left = document.getElementsByClassName("universe")[0].offsetLeft
            let galaxy_width = document.getElementsByClassName("galaxy")[0].offsetWidth
            let mousex = event.pageX-1
            let distance = mousex-universe_left >=0 ? mousex-universe_left:0
            let ratio = parseFloat(((distance/galaxy_width)*100).toFixed(3))
            ratio = ratio <=100 ? ratio : 100
            this.props.updatePlanetPosition(ratio)
        }
    }
    render(){
        let galaxies = this.props.unidata.map((galaxy,index)=>{
            return <Galaxy key={"galaxy_"+index} data={galaxy} galaxy_seq={index} handleGalaxyMouseMove={this.handleGalaxyMouseMove}></Galaxy>
        })
        return (
            <div className="universe"
                 id={this.props.id}
                 onMouseMove={this.handleMouseMove}
                 onMouseUp={this.handleMouseUp}
            >
                {galaxies}
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
    return {
        unidata: state.voice_tool.unidata,
        controller_bar_mode: state.voice_tool.controller_bar_mode
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getUniverseData: () => {
            return dispatch(getUniverseData())
        },
        updatePlanetPosition: (ratio)=>{
            return dispatch(updatePlanetPosition(ratio))
        },
        setControllerBarMode: (mode,info)=>{
            return dispatch(setControllerBarMode(mode,info))
        },
    }
}
export default connect(mapStatetoProps, mapDispatchToProps)(Universe)