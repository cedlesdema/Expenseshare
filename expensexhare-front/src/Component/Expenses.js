import React, {Component} from 'react';
import {NavLink, Route} from "react-router-dom";
import Form from "./Form";


class Expenses extends Component {
    render() {
        return (
            <div>
                <h2>Expenses</h2>
                <NavLink to={this.props.match.url + '/add'}>Ajouter une dépense</NavLink>
                <Route path={this.props.match.url + '/add'} component={Form} />

                    {/* Afficher la liste des dépense*/}
            </div>
        );
    }
}

export default Expenses;