import Image from "next/image"

const RecipeCard = ({image, name}) => {
  return (
    <div className='recipe_card'>
    <Image 
      src={image}
      width={300}
      height={300} //LOS 4 SON OBLIGATORIOS
      alt={name}/>
    <h3>{name}</h3>
    <a href="#">Ver Más</a>
        </div>
  )
}

//Llaves > Inyectas el JS
export default RecipeCard