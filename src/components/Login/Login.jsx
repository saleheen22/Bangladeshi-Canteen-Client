import React, { useState } from 'react';
import './Login.css';
import Form from 'react-bootstrap/Form';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Login = () => {
    return (
      <div>
        <Header></Header>
        <h2 className='mt-5 d-flex justify-content-center'>Please Login</h2>
          <div className='container d-flex justify-content-center'>
            
            
            <Form className='w-50'>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='text-start ' >Email address</Form.Label>
                    <Form.Control type="email" name="email" className='bg-info'   placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label >Password</Form.Label>
                    <Form.Control type="password" name = "password" className='bg-info'    />
                </Form.Group>
                <p>
                <Button className='bg-danger w-25 text-white fw-semibold border-0' >Login</Button>
                </p>
                <p>
                New to Bangladeshi Canteen? <Link to ="/registration">Register</Link>
            </p>
             <p>
                <Link className='fw-bold'>Google SingIn</Link>
                <Link className='fw-bold ms-5'>Github SingIn</Link>
             </p>
            </Form>
            
        </div>
      </div>
    );
};

export default Login;