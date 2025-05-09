import RecipeCard from "./RecipeCard"
import parsedData from "@/data/recipes"

const RecipesGrid = () => {

  return (
    <div className="recipes_grid">
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
        <RecipeCard/>
    
    </div>
  )
}

export default RecipesGrid