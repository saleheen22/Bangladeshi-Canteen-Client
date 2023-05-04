import React, { useContext, useState } from 'react';
import './Header.css';
import { Button, Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import chef1 from '../../assets/chef1.jpg';
import chef2 from '../../assets/chef2.jpg';
import logo from '../../assets/logo.png';
import Badge from 'react-bootstrap/Badge'
import { Link, NavLink, Navigate } from 'react-router-dom';
import logo1 from '../../assets/logo-black.png';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Header = () => {
    

    const {user, logOut} = useContext(AuthContext);
    const [name, setName] = useState('');
    const handlehover = () => {
        setName(user?.displayName);
        console.log(name)
    }
    const handleMouseOut = () => {
        setName('');
    }
    const handleSignOut = () => {
        logOut()
        .then(result => {
        })
        .catch(error => {
            console.log(error)
        })
    }
    console.log(user);
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

                    {
                        user ?   <div className='d-flex '>
                             <p className='mt-3'>{name}</p>
                            <div>
                                <img onMouseOut={handleMouseOut} onMouseOver={handlehover} className='image me-2' src={user.photoURL} alt="" />
                               
                            </div>
                            <Navbar.Brand className='fw-bold'><Link onClick={handleSignOut}>
                        <Button className='bg-danger text-white fw-semibold border-0' >Logout</Button>
                        </Link></Navbar.Brand> 
                        </div>:
                          <Navbar.Brand className='fw-bold'><Link to= "/login">
                          <Button className='bg-danger text-white fw-semibold border-0' >Login</Button>
                          </Link>  </Navbar.Brand>

                    }
                  

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;