import React from 'react';
import '../Footer/Footer.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../../assets/logo-black.png';
import { FaFacebook, FaInstagram, FaTwitterSquare,FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='container mt-5 pt-5 text-center'>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <img className='img img-fluid' src={logo} alt="" />
                        </Col>
                        <Col sm={6}>
                            <h5 className='mt-4'>Connect With Us</h5>
                           <div className='d-flex justify-content-evenly mt-3 px-5'>
                           
                            <FaFacebook></FaFacebook>
                            <FaInstagram></FaInstagram>
                            <FaTwitterSquare></FaTwitterSquare>
                            <FaYoutube></FaYoutube>

                           </div>
                           <p className='text-start copy-right'>@CopyRight</p>
                      
                      </Col>
                       
                       
                    </Row>
                    {/* <div>
                        Our Motto is to support Bangladesh
                    </div> */}
                          <Row>
                        <Col sm={6} className='text-start mt-5'>
                        <p>Bangladeshi Canteen, a haven for food lovers who crave the authentic taste of Bangladesh.</p>
                        </Col>

                      
                        <Col sm = {6}>
                            
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Footer;