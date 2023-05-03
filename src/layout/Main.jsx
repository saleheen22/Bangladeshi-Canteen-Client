import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Chefs from '../components/chefs/Chefs';

const Main = () => {
    return (
        <div className='container'>
            <Header></Header>
            <Banner></Banner>
            <Chefs></Chefs>
            <h2>This is main content</h2>
        </div>
    );
};

export default Main;