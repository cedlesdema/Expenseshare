import React, {Component} from 'react';
import Menu from "./Menu";
import {Route} from "react-router-dom";
import Expenses from "./Expenses";
import Dashborard from "./Dashborard";
import Persons from "./persons/Persons";

class Group extends Component {
    render() {
        return (
            <div>
                {this.props.match.params.slug}
            <Menu url={this.props.match.url}/>
                <Route path={this.props.match.url} exact component={Dashborard}/>
                <Route path={this.props.match.url + '/expenses'} component={Expenses} />
                <Route path={this.props.match.url + '/persons'} render={props => <Persons {...props} slug={this.props.match.params.slug}/>} />
            </div>
        );
    }
}

export default Group;