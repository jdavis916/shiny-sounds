import React from 'react';

import { Navbar, Nav,Container } from 'react-bootstrap';

function NavMain() {
  return (
    <Navbar bg="light" expand="lg">
		  <Container>
		    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
		    <Navbar.Toggle aria-controls="basic-navbar-nav" />
		    <Navbar.Collapse id="basic-navbar-nav">
		      <Nav className="me-auto">
		        <Nav.Link href="/">Home</Nav.Link>
		        <Nav.Link href="/store">Store</Nav.Link>
		        <Nav.Link href="/cart">Cart</Nav.Link>
		        <Nav.Link href="/faq">FAQ</Nav.Link>
		        <Nav.Link href="/contact">Contact</Nav.Link>
		        <Nav.Link href="/signup">Signup</Nav.Link>
		        {/*<NavDropdown title="Dropdown" id="basic-nav-dropdown">
		          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
		          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
		          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
		          <NavDropdown.Divider />
		          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
		        </NavDropdown>*/}
		      </Nav>
		    </Navbar.Collapse>
		  </Container>
		</Navbar>
  )
}

export default NavMain;