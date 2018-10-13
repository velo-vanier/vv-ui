import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Vélo-Vanier</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/bikes">Bikes</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/bikes/new">Add a bike</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/users">Users</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/users/new">Add a user</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/users">Log in</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}