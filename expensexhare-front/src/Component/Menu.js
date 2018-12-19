import React, { Component } from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavItem} from 'reactstrap';
import { NavLink } from "react-router-dom";



class Menu extends Component {
    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand>Expenshare</NavbarBrand>
                <Collapse isOpen={true} navbar></Collapse>
                <Nav className="ml-auto" navbar>


                    <NavItem>
                        <NavLink to={this.props.url} className="nav-link">Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={this.props.url + '/expense'} className="nav-link">Dépenses</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to={this.props.url + '/persons'} className="nav-link">Personnes</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Menu;