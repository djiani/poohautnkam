import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import './NavBar.css';


function NavBar(props) {
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="md" sticky="top" className="navBar" >
                <Container fluid>
                    <Navbar.Brand href="/home"> Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto" variant="pills" >
                            <NavDropdown title="About US" id="collasible-nav-dropdown">
                                <NavDropdown.Item eventKey="1.1" href="/aboutus/ourvision">Our vision</NavDropdown.Item>
                                <NavDropdown.Item  eventKey="1.2"href="/aboutus/executive_team">Executive Team</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="1.3" href="/aboutus/bylaws">By Laws</NavDropdown.Item>
                                <NavDropdown.Item eventKey="1.3" href="/aboutus/membership">Membership</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link eventKey="3" href="/projects" >Projects</Nav.Link>
                            <NavDropdown title="Media" id="collasible-nav-dropdown">
                                <NavDropdown.Item eventKey="3.1" href="media/gallery">Photo Gallery</NavDropdown.Item>
                                <NavDropdown.Item eventKey="3.2" href="media/video">Video Gallery</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link eventKey="4" href="/events">Events</Nav.Link>
                            <Nav.Link eventKey="6" href="/donate">Donate</Nav.Link>
                            <Nav.Link eventKey="7" href="/contactus">Contact US</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </React.Fragment>
    )
}

export default NavBar;