import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Registration = () => {
    const {createUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');




    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const pic = form.pic.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name)
        if (password.length < 6 ){
            setError("ERROR : The password can not be less than 6")
            return;
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;

            })
            .catch(error => {
                setError(error.message);
            })

        form.reset(); 
        setError("You have successfully register to Bangladeshi Canteen website.")   
      
    }
    
    return (

        <div>
            <Header></Header>
            <h2 className='mt-5 d-flex justify-content-center'>Please Register</h2>
            <div className='container d-flex justify-content-center'>


                <Form className='w-50' onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label >Name</Form.Label>
                        <Form.Control type="name" name="name" className='bg-info'  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className='text-start ' >Email address</Form.Label>
                        <Form.Control type="email" name="email" className='bg-info' placeholder="name@example.com" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label >Password</Form.Label>
                        <Form.Control type="password" name="password" className='bg-info' required  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label >Photo URL</Form.Label>
                        <Form.Control type="url" name='pic' className='bg-info'  />
                    </Form.Group>
                    <p>
                    <Button className='bg-danger w-25 text-white fw-semibold border-0' type='submit'>Register</Button>
                    </p>
                    <p className='text-danger'><h2>{error}</h2></p>
                </Form>
            </div>
        </div>

    );
};

export default Registration;