import Image from "next/image"

const RecipeCard = () => {
  return (
    <div className='recipe_card'>
    <Image 
      src="/assets/pomerania.jpg"
      width={250}
      height={250} //LOS 4 SON OBLIGATORIOS
      alt="Pomerania"/>
    <h3>Sample Name</h3>
    <a href="#">Ver Más</a>
        </div>
  )
}

//Llaves > Inyectas el JS
export default RecipeCard