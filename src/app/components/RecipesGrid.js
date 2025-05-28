'use client'

import {useState, useEffect} from 'react';

import RecipeCard from "./RecipeCard";
import axios from 'axios';

const RecipesGrid = () => {

  const [data,setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://dummyjson.com/recipes?limit=20&skip=0')
        const responseData = response.data.recipes
        setData(responseData);
        setLoading(false);
      } catch (error) {
        console.log("¡Error!");
        setError(true);
      }
      
    }

    getData()
  }, []);

  return (
    <div className="recipes_grid">

    {!loading && 
    data.map((recipe) => (
        <RecipeCard 
        key={recipe.id} 
        name={recipe.name} 
        image={recipe.image} 
        id={recipe.id}
        />
      ))
    }

    {loading && "Cargando..."}
    
    {error && "HUBO UN ERROR"}
    </div>
    //condicion ? si la condicion es verdadera : si la conficion es falsa
  );
};

export default RecipesGrid;
