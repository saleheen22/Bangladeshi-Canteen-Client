import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Chefs.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { PacmanLoader } from 'react-spinners';
import LazyLoad from 'react-lazy-load';
const Chefs = () => {
    const {loading} = useContext(AuthContext);
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch('https://b7a10-chef-recipe-hunter-server-side-sal-muntasaleheen-gmailcom.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            {
                loading ? <p><PacmanLoader color="rgba(54, 215, 183, 1)" />
                </p> :
                <div>
                                <h1 className='text-center fw-bold mt-2 text-danger'>Our Chefs</h1>
            <Row xs={1} md={2} className="g-4 mt-5 shadow">
                {chefs.map((chef) => (
                    <Col>
                        <Card className='h-100 shadow'>
                           <LazyLoad offset={300}>
                           <Card.Img variant="top" className='img-circle' src={chef.image_url} />
                           </LazyLoad>
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
            }


        </div>
    );
};

export default Chefs;