import RecipesGrid from "@/app/components/RecipesGrid.js";

const HomeContainer = () => {
  return (
    <div className="home_container">
        <h2>Ultimas Recetas</h2>
        <RecipesGrid/>
    </div>
  )
}

export default HomeContainer;