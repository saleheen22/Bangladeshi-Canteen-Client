import React from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Chefs from '../components/chefs/Chefs';
import Recipes from '../components/Reipes/Recipes';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Menus from '../components/Menus/Menus';
import Restaurant from '../components/Restaurant/Restaurant';

const Main = () => {
    return (
     <div>
           <div className='container'>
            <Header></Header>
            <Outlet></Outlet>
            <Banner></Banner>
            <Chefs></Chefs>
            <Restaurant></Restaurant>
            <Menus></Menus>
            
            
        </div>
        <Footer></Footer>
     </div>
    );
};

export default Main;