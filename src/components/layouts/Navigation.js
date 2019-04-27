import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
  import {switchLanguage, labels} from '../../helpers/localization';
  import logo from '../../components/layouts/navlogo.png';

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
        <NavbarBrand href="/"><img src={logo} /> Vélo-Vanier</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/bikes">{labels.bikes}</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/loan">Loan</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/bikes/new">Add a bike</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/users">Borrowers</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/users/new">Add a borrower</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/users">Log in</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" onClick={() => switchLanguage()}>{labels.lang}</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
