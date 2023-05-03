import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
import Header from '../Header/Header';

const Recipes = () => {
    console.log('hello')
    const recipes = useLoaderData();
    console.log(recipes[0].id);
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])
    const seletedChef = chefs.find(n => n.id == recipes[0].id);
    const pic = 'https://balbetta.sirv.com/pics/fatima-akter-removebg-preview.png';
    
    return (

        <div>
            <Header></Header>
           
            <div className='d-flex justify-content-between mt-4 container bg-danger'>
                <div className='d-flex flex-column fs-7 text-start text-wrap '>
                    <p className='d-flex flex-column justify-content-center align-items-center fs-7 text-start text-wrap mt-4 pt-5 ms-0 ps-0 '>
                    <h3 className='text-start'>{seletedChef?.name}</h3>
                    {seletedChef?.bio}

                    {seletedChef?.name} has {seletedChef?.years_of_experience} years of experience. The numbers of like in the social media is {seletedChef?.number_of_likes}. The number of recipes the chef tried so far is {seletedChef?.number_of_recipes}

                    </p>
                    <Button className='bg-danger text-white fw-semibold border-0' >See Menu</Button>



                </div>


                <img className='ms-4 px-4 img img-fluid w-50' src={pic} alt="" />

            </div>
        </div>
    );
};

export default Recipes;