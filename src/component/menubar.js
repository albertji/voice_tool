import React, {Component} from 'react'
import "../assets/css/main.css"

export default class MenuBar extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div className="menubar">
                <div className="menuleft">浏览模式</div>
            </div>
        )
    }
}