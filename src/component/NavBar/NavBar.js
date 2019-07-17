import React from 'react';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';


function NavBar(props) {
    return (
        <React.Fragment>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="/home">PO0 HAUT-NKAM</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <NavDropdown title="About US" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/aboutus/our_vision">Our vision</NavDropdown.Item>
                            <NavDropdown.Item href="/aboutus/executive_team">Executive Team</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/aboutus/by_laws">By Laws</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <NavDropdown title="Media" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="media/photos">Photo Gallery</NavDropdown.Item>
                            <NavDropdown.Item href="media/video">Video Gallery</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/events">Events</Nav.Link>
                        <Nav.Link href="/membership">Membership</Nav.Link>
                        <Nav.Link href="/report">Report</Nav.Link>
                        <Nav.Link href="/contactus">Contact US</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>

        </React.Fragment>
    )
}

export default NavBar;