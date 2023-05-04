import React from 'react';
import '../Restaurant/Restaurant.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/restaurant-1.jpg';
import img2 from '../../assets/restaurant-2.jpg'
const Restaurant = () => {
    return (
      <div className='mt-5 pt-5 text-center text-danger'>
        <h2 className='fw-bold'>Our Restaurant</h2>
        <p className='fw-semibold mb-3 pb-3 mt-2 pt-2'>
            Here is the glimpse of our restaurant. You will get a very Bangladeshi feel in our restaurant. Our restaurant is decorated using the concept of <strong>Vojon Roshik Bangali</strong>
        </p>
          <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        
                        <p>Safe and sound place for any family get to gather</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        
                        <p>You can enjoy your meal with a beautiful garden view.</p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
      </div>
    );
};

export default Restaurant;