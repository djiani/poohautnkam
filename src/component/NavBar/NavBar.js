import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';


function NavBar(props) {
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="#home">PO0 HAUT-NKAM</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <NavDropdown title="About US" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Our vision</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Executive Team</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.3">By Laws</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#projects">Media</Nav.Link>
                        <NavDropdown title="Media" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Photo Gallery</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Video Gallery</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#projects">Events</Nav.Link>
                        <Nav.Link href="#projects">Membership</Nav.Link>
                        <Nav.Link href="#projects">Report</Nav.Link>
                        <Nav.Link href="#projects">Contact US</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>

        </React.Fragment>
    )
}

export default NavBar;