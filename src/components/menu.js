import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


class Menu extends React.Component {
	render() {

  	return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Cellphones" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Test</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Test</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Test</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Cars" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Test</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Test</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Test</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Other" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Test</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
}

export default Menu;