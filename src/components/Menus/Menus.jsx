import React from 'react';
import menu1 from '../../assets/beef-biryani.jpg';
import menu2 from '../../assets/dessert.jpg'
import menu3 from '../../assets/pitha.jpg'
import menu4 from '../../assets/fish-curry.jpg'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Menus = () => {
    return (
        <div className='mt-5 pt-5 mb-5 pb-5 '>
            <div>
                <h2 className='text-center mb-5 pb-5 fw-bold text-danger'>Here some of our most popular menus</h2>
            </div>
            <div>
                <Row xs={1} md={2} className="g-4">

                    <Col >
                        <Card className='h-100 bg-info'>
                            <Card.Img variant="top" src={menu1} />
                            <Card.Body>
                                <Card.Title>Beef Biryani</Card.Title>
                                <Card.Text>
                                    Beef Biryani is a popular rice-based dish that originated in the Indian subcontinent and is now widely enjoyed across the world. It typically consists of long-grain basmati rice layered with spiced beef, caramelized onions, and aromatic spices like cardamom, cinnamon, and bay leaves. The dish is then slow-cooked to perfection, resulting in a flavorful and fragrant one-pot meal that is perfect for sharing with family and friends. Beef Biryani is often served on special occasions and is a staple in many South Asian households.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card className='h-100 bg-info'>
                            <Card.Img variant="top" src={menu2} />
                            <Card.Body>
                                <Card.Title>Sweet Jabun</Card.Title>
                                <Card.Text>
                                Indulge in the ultimate dessert experience with our signature Gulab Jamun - a melt-in-your-mouth delicacy that is sure to satisfy your sweet tooth. Made from a blend of homemade khoya (milk solids) and flour, our Gulab Jamun is fried to perfection and then soaked in a sweet syrup infused with cardamom and saffron. Served warm and garnished with chopped nuts, this classic dessert is a crowd-pleaser that is sure to leave you craving for more. Perfect for any occasion or as a post-meal treat, come and savor the taste of our authentic Gulab Jamun!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card className='h-100 bg-info'>
                            <Card.Img variant="top" src={menu3} />
                            <Card.Body>
                                <Card.Title>Chitoi Pitha</Card.Title>
                                <Card.Text>

                                Introducing our mouthwatering Pitha - a traditional Bangladeshi dessert that is sure to delight your taste buds. Made with a blend of rice flour and jaggery, our Pitha is delicately steamed to perfection, resulting in a soft and fluffy texture that simply melts in your mouth. Infused with the aroma of cardamom and coconut, our Pitha is the perfect balance of sweet and savory flavors. Whether you prefer it as a post-meal treat or as a snack, our Pitha is a delicious and wholesome option that is perfect for any occasion. Come and experience the authentic flavors of Bangladesh with our signature Pitha!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col >
                        <Card className='h-100 bg-info'>
                            <Card.Img variant="top" src={menu4} />
                            <Card.Body>
                                <Card.Title>Macher Curry</Card.Title>
                                <Card.Text>
                                    Introducing our signature fish curry - a delectable and flavorful dish that will transport your taste buds straight to the streets of Bangladesh. Made with locally-sourced fresh fish, our curry is slow-cooked to perfection with a blend of fragrant spices and herbs, resulting in a rich and aromatic gravy that perfectly complements the tender, flaky fish. Whether you prefer it spicy or mild, our fish curry is the ultimate comfort food that will leave you feeling satisfied and content. Come try it out and experience the authentic flavors of Bangladesh!
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Menus;