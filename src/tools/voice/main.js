import React, {Component} from 'react'
import MenuBar from "../../component/menubar"
import MainPage from "./components/mainpage"

export default class UsersMore extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <div>
                <MenuBar></MenuBar>
                <MainPage></MainPage>
            </div>
        )
    }
}