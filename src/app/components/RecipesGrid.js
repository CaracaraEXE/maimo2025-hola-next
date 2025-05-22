'use client'

import {useState, useEffect} from 'react';

import RecipeCard from "./RecipeCard";
import parsedData from "@/data/recipes";
import axios from 'axios';

const RecipesGrid = () => {

  const [data,setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get('https://dummyjson.com/recipes?limit=20&skip=0')
      const responseData = response.data.recipes
      console.log(responseData);
      setData(responseData);
    }

    getData()
  }, []);

  return (
    <div className="recipes_grid">
      {parsedData.recipes.map((recipe, index) => (
        <RecipeCard key={index} name={recipe.name} image={recipe.image} />
      ))}
    </div>
  );
};

export default RecipesGrid;
