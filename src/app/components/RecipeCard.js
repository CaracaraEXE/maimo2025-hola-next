import Image from "next/image"

const RecipeCard = () => {
  return (
    <div className='recipe_card'>
    <Image src="/assets/pomerania.jpg" width={200} height={200} alt="Pomerania"/>
    <p>SAMPLE name</p>
    <a href="#">Ver Más</a>
        </div>
  )
}

//Laves > Inyectas el JS
export default RecipeCard