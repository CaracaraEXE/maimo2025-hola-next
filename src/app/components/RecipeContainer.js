'use client'
import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const RecipeContainer = ({id}) => {

    const [recipeData,setRecipeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getRecipeData = async () => {
            try {
                const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
                const responseData = response.data;
                setRecipeData(responseData);
                setLoading(false);
            } catch(error){
                console.log("Fuck you lol");
            }
        }

        getRecipeData();
        console.log(recipeData);
        const ingCont = document.querySelector(".ingcont ul");
    }, []);


  return (
    <div className='recipe_container'>
        {!loading && 
            <>
            <h1>{recipeData.name}</h1>
            <Image 
            src={recipeData.image}
            width={300}
            height={300}
            alt={recipeData.name}/>

            <div className='ing_Container'>
                <ul>
                    {
                    recipeData.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))
                }
                    </ul>
            </div>
            </>
    }

     {loading && "Cargando..."}
    </div>
  )
}

export default RecipeContainer