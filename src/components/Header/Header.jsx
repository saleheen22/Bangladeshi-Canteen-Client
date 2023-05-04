import React from 'react';
import './Header.css';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import chef1 from '../../assets/chef1.jpg';
import chef2 from '../../assets/chef2.jpg';
import logo from '../../assets/logo.png';
import Badge from 'react-bootstrap/Badge'
import { NavLink, Navigate } from 'react-router-dom';
import logo1 from '../../assets/logo-black.png';
const Header = () => {

    return (
        <div >
            <Navbar >
                <Container className='d-flex justify-content-between' >
                    <Navbar.Brand className='logo' href="/"> 
                    <img src={logo1} alt="" />
                    </Navbar.Brand>
                    <Nav >
                        <Nav.Link className='text-black n-active' ><NavLink to= "/">Home</NavLink></Nav.Link>
                        <Nav.Link  className=' text-black ' ><NavLink className= "n-active" to= "/blog">Blog</NavLink></Nav.Link>
                        <Nav.Link  className=' text-black' >Contact</Nav.Link>
                    </Nav>
                    <Navbar.Brand  className='fw-bold'>Login</Navbar.Brand>

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;