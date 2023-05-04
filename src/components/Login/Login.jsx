import React, { useContext, useState } from 'react';
import './Login.css';
import Form from 'react-bootstrap/Form';
import Header from '../Header/Header';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Footer from '../Footer/Footer';

const Login = () => {
    const [error, setError] = useState('');
    const { signInEmailPass, signInGoogle, signInGithub} = useContext(AuthContext); 


    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInEmailPass(email, password)
            .then(result =>{
                const loggedUser = result.user;
                console.log("user:", loggedUser);
                navigate(from, {replace: true})
            })
            .catch(error=>{
                console.log(error);
                setError("ERROR: Wrong password or email");
            })
        console.log(email, password);
        console.log("user successfully logged in")
    }

    const handleGoogleSignIn = () => {
        signInGoogle()
            .then(result => {
                const loggedUser = result.user;
                console.log("user:", loggedUser);
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error);
                // setError(error.message);
            })
    }
    const handleGithubSignIn = () => {
        signInGithub()
            .then(result =>{
                const loggedUser = result.user;
                console.log("User github", loggedUser)
                navigate(from, {replace: true})
            })
            .catch(error => {
                console.log(error)
                // setError(error.message)
            })
    }
    return (
      <div>
        <Header></Header>
        <h2 className='mt-5 d-flex justify-content-center'>Please Login</h2>
          <div className='container d-flex justify-content-center'>
            
            
            <Form className='w-50' onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className='text-start ' >Email address</Form.Label>
                    <Form.Control type="email" name="email" className='bg-info'   placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label >Password</Form.Label>
                    <Form.Control type="password" name = "password" className='bg-info'    />
                </Form.Group>
                <p>
                <Button className='bg-danger w-25 text-white fw-semibold border-0' type='submit' >Login</Button>
                </p>
                <p>
                New to Bangladeshi Canteen? <Link to ="/registration">Register</Link>
            </p>
             <p>
                <Link  onClick={handleGoogleSignIn} className='fw-bold'>Google SingIn</Link>
                <Link onClick={handleGithubSignIn} className='fw-bold ms-5'>Github SingIn</Link>
             </p>
             <p className='text-danger'><h2>{error}</h2></p>
            </Form>
            
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Login;