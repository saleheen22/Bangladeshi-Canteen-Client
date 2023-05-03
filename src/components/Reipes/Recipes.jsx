import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
const Recipes = () => {
    console.log('hello')
    const recipes = useLoaderData();
    console.log(recipes)
    return (
        <div>
            {
                recipes.map((recipe)=> (
                    <p>{recipe.recipe_name}</p>
                ) )
            }
       

            
        </div>
    );
};

export default Recipes;