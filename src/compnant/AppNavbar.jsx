import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';

const AppNavbar = () => {
    const cart =useSelector(state=>state.cart);
    return (
        <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
            <Container>
                <Link to="/" className='navbar-brand'>Cart App</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='nav-link'>Products</Link>
                        <Link to="/cart" className='nav-link'> Cart <Badge bg="secondary">{cart.length}</Badge></Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default AppNavbar;
