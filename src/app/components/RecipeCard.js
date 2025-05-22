import Image from "next/image"

const RecipeCard = ({image, name, id}) => {
  return (
    <div className='recipe_card'>
    <Image 
      src={image}
      width={300}
      height={300}
      alt={name}/>
    <h3>{name}</h3>
    <a href="#">Ver Más</a>
        </div>
  )
}

export default RecipeCard