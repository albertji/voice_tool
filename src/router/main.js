import React, {Component} from 'react';
import {Router, Route, Switch, Link,Redirect} from 'react-router-dom';
import VoiceTool from 'bundle-loader?lazy&name=voicetool!../tools/voice/main';
import Bundle from './Bundle';
import history from '../component/history';

const Loading = function () {
    return <div></div>
};

const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);

export default class Main extends Component{
    constructor(props) {
        super(props)
    }
    render(){
        return(
            <Router history={history}>
                <div className="portal">
                    <Switch>
                        <Route exact path="/voice" component={createComponent(VoiceTool)} />
                    </Switch>
                </div>
            </Router>
        )
    }
}