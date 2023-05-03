import React from 'react';
import './Header.css';
import img from '../../assets/banner.jpg';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import chef1 from '../../assets/chef1.jpg';
import chef2 from '../../assets/chef2.jpg';
import logo from '../../assets/logo.png';
import Badge from 'react-bootstrap/Badge'
import { Navigate } from 'react-router-dom';
const Header = () => {

    return (
        <div >
            <Navbar >
                <Container className='d-flex justify-content-between' >
                    <Navbar.Brand className='logo' href="/"> 
                    <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Nav >
                        <Nav.Link className='banner fw-semibold' >Home</Nav.Link>
                        <Nav.Link  className='banner fw-semibold' >Blog</Nav.Link>
                        <Nav.Link  className='banner fw-semibold' >Contact</Nav.Link>
                    </Nav>
                    <Navbar.Brand  className='text-success fa-bold'>Login</Navbar.Brand>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;