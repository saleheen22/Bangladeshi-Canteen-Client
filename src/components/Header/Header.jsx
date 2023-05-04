import React, { useContext, useState } from 'react';
import './Header.css';
import { Button, Carousel, Container, Nav, Navbar } from 'react-bootstrap';

import { Link,  Navigate, NavLink } from 'react-router-dom';
import logo1 from '../../assets/logo-black.png';
import { PacmanLoader } from 'react-spinners';
import { AuthContext } from '../AuthProvider/AuthProvider';
const Header = () => {
    

    const {user, logOut, loading} = useContext(AuthContext);
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
            <Navbar>
                <Container className='d-md-flex justify-content-between' >
                    <Navbar.Brand className='logo' href="/"> 
                    <img src={logo1} alt="" />
                    </Navbar.Brand>
                    <Nav >
                        <Nav.Link className='text-black n-active' ><NavLink to= "/">Home</NavLink></Nav.Link>
                        <Nav.Link  className=' text-black ' ><NavLink className= "n-active" to= "/blog">Blog</NavLink></Nav.Link>
                        <Nav.Link  className=' text-black' >Contact</Nav.Link>
                    </Nav>

   {
    loading ? <>
    <PacmanLoader color="rgba(54, 215, 183, 1)" />
    </>:<>
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
    </>
   }
                  

                </Container>
            </Navbar>
        </div>
    );
};

export default Header;