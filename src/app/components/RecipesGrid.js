import RecipeCard from "./RecipeCard"
import parsedData from "@/data/recipes"

const RecipesGrid = () => {



  return (
    <div className="recipes_grid">


        {parsedData.recipes.map((recipe,index) => <RecipeCard key={index} name={recipe.name} image={recipe.image}/>)}
    
    </div>
  )
}

//el index number sirve como reemplazo de Key

export default RecipesGrid