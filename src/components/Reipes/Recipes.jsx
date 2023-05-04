import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, Table } from 'react-bootstrap';
import Header from '../Header/Header';

const Recipes = () => {
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
    console.log(recipes);

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




                </div>


                <img className='ms-4 px-4 img img-fluid w-50' src={seletedChef?.image_trasnparent} alt="" />

            </div>
            <div className='container mt-5'>
                <h2>Best Recipe Info</h2>
                <p>{seletedChef?.name} is excel in many recipes. Some of them are given below:</p>
                <Table className='bg-info' striped bordered hover>
                    <thead>
                        <tr>

                            <th>Recipe Name</th>
                            <th>Ingredients</th>
                            <th>Cooking Method</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>


                        {
                            recipes.map((recipe) => (
                                <>
                                    <tr>
                                        <td>{recipe?.recipe_name}</td>
                                        <td>
                                            <ol>
                                               

                                                {recipe?.ingredients.map(name => (
                                                    <li>
                                                        {name}
                                                    </li>
                                                ))}
                                            </ol>
                                        </td>
                                        <td>{recipe?.cooking_method}</td>
                                        <td>{recipe?.rating}</td>
                                    </tr>

                                </>

                            ))
                        }

                    </tbody>


                </Table>


            </div>
        </div>
    );
};

export default Recipes;