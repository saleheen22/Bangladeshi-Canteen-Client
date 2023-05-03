import React from 'react';
import './Banner.css';
import banner from '../../assets/banner-transparent.png'
import { Button } from 'react-bootstrap';
const Banner = () => {
    return (
        <div className='d-flex justify-content-between mt-4'>
            <div className='d-flex flex-column fs-7 text-start text-wrap banner-p'>
                <p className='fw-semibold d-flex flex-column justify-content-center align-items-center fs-7 text-start text-wrap mt-4 pt-5'>Bangladeshi Canteen is a restaurant with chefs from different districts of Bangladesh, each an expert in traditional cuisine from their region. From spicy curries to flavorful fish dishes, they offer a diverse range of authentic Bangladeshi food.
                
                </p>
                <Button className='bg-danger w-25 text-white fw-semibold border-0' >See Menu</Button>
                
             
                
            </div>
            
                
            <img className='ms-4 ' src={banner} alt="" />

        </div>
    );
};

export default Banner;