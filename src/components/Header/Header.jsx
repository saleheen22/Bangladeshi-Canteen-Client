import React from 'react';
import './Header.css';
import img from '../../assets/banner.jpg';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import chef1 from '../../assets/chef1.jpg';
import chef2 from '../../assets/chef2.jpg';
import logo from '../../assets/logo.png';
import Badge from 'react-bootstrap/Badge'
const Header = () => {
    return (
        <div >
            <Navbar >
                <Container className='d-flex justify-content-between' >
                    <Navbar.Brand className='logo' href="#home"> 
                    <img src={logo} alt="" />
                    </Navbar.Brand>
                    <Nav >
                        <Nav.Link className='text-success fa-bold' >Home</Nav.Link>
                        <Nav.Link  className='text-success fa-bold' >Blog</Nav.Link>
                        <Nav.Link  className='text-success fa-bold' >Contact</Nav.Link>
                    </Nav>
                    <Navbar.Brand  className='text-success fa-bold'>Login</Navbar.Brand>

                </Container>
            </Navbar>
        </div>
    );
};
<script src="https://kit.fontawesome.com/ce1d69c78b.js" crossorigin="anonymous"></script>
export default Header;