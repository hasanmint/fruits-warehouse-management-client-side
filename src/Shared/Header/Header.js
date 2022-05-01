import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth);
    };
    return (
        <>
            <Navbar className='navbar navbar-brand p-3' collapseOnSelect expand="lg" sticky='top' bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img alt="" className='img-responsive' height={30} width={35} />
                        <span className='mt-5 ms-2'>Logo</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/inventories">Inventories</Nav.Link>
                            <Nav.Link href="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>

                            {user ?
                                <button className='btn btn-info text-dark text-decoration-none' onClick={handleLogout}>Log Out</button>
                                :
                                <CustomLink to='/login' className='btn btn-info text-decoration-none text-white fw-bold'>Login </CustomLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;