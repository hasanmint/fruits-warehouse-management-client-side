import React, { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">Logo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/inventories">Inventories</Nav.Link>
                                <Nav.Link href="/blogs">Blogs</Nav.Link>
                            </Nav>
                            <Nav>

                                <Nav.Link href="/login">Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default Header;