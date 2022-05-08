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
            <Navbar className='navbar navbar-brand p-3' collapseOnSelect expand="lg" sticky='top' bg="success">
                <Container>
                    <Navbar.Brand href="/">
                        <span className='mt-5 ms-2 text-white fw-bold'>Fruits warehouse</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ">
                            <Nav.Link href="/" className='text-white'>Home</Nav.Link>
                            <Nav.Link href="/blogs" className='text-white'>Blogs</Nav.Link>
                        </Nav>
                        <Nav>

                            {
                                user && <>

                                    <Nav.Link href="/manageinventories" className='text-white'>Manage Inventory</Nav.Link>
                                    <Nav.Link href="/addinventory" className='text-white'>Add Inventory</Nav.Link>
                                    <Nav.Link href='/additem/:inventoryId' className='text-white'>Add Item</Nav.Link>
                                    <Nav.Link href="/myitems" className='text-white'>My Items</Nav.Link>
                                </>
                            }
                            {user ?
                                <button className='btn btn-success text-white text-decoration-none fw-bold ' onClick={handleLogout}>Log Out</button>
                                :
                                <CustomLink to='/login' className='btn btn-success text-decoration-none btn btn-success text-white fw-bold'>Login </CustomLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;