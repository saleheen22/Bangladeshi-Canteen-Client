import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';

const Main = () => {
    return (
        <div className='container'>
            <Header></Header>
            <Banner></Banner>
            <h2>This is main content</h2>
        </div>
    );
};

export default Main;