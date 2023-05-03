import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Chefs.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Chefs = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <h1 className='text-center fw-bold mt-2 text-danger'>Our Chefs</h1>
            <Row xs={1} md={2} className="g-4 mt-5 shadow">
                {chefs.map((chef) => (
                    <Col>
                        <Card className='h-100 shadow'>
                            <Card.Img variant="top" className='img-circle' src={chef.image_url} />
                            <Card.Body className='chef shadow'>
                                <Card.Title>{chef.name}</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Years of Experience:{chef.years_of_experience}</li>
                                        <li>Numbers of Recipes:{chef.number_of_recipes}</li>
                                        <li>Likes:{chef.number_of_likes}</li>
                                    </ul>
                                    <div>
                                        <Link to={`/recipes/${chef.id}`} >
                                            <Button className='bg-danger w-25 text-white fw-semibold border-0 mt-5' >View Recipes</Button>
                                        </Link>

                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>





        </div>
    );
};

export default Chefs;