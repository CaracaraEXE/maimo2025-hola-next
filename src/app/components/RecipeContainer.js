'use client'
import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from "next/link"
import LoadingIcon from './LoadingIcon';

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
                setError(true);
            }
        }

        getRecipeData();
        console.log(recipeData);
        const ingCont = document.querySelector(".ingcont ul");
    }, []);


  return (
    <div className='recipe_body'>
        {!loading && 
            <div className='recipe_container'>
            <Link href="/" className='return_link'>Go Back</Link>
            <div className='recipe_header'>
                <section className='image_header'>
                <h1>{document.title = recipeData.name}</h1>
                <Image 
                src={recipeData.image}
                width={300}
                height={300}
                alt={recipeData.name}/>
                </section>

                <div className='side_bar'>
                    <h2>Ingredients</h2>
                    <ul>
                        {
                        recipeData.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))
                    }
                        </ul>

                    <p>Difficulty: {recipeData.difficulty}</p>

                    <div className='tag_container'>
                        <p>TAGS:</p>
                        {
                            recipeData.tags.map((tag, index) =>
                            (
                                <span key={index} className='recipe_tag'>{tag}</span>
                            ))
                        }
                    </div>
                </div>
            </div>
             <section className='how_to'>
                    <h2>How To</h2>
                    <ol>
                    {
                        recipeData.instructions.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))
                    }
                    </ol>
                </section>
            </div>
    }

     {loading && <LoadingIcon/>}

     {error && "¡No se pudo cargar la receta!"}
    </div>
  )
}

export default RecipeContainer