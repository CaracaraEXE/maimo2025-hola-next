import Image from "next/image"
import Link from "next/link"

const RecipeCard = ({image, name, id}) => {
  return (
    <div className='recipe_card'>
    <Image 
      src={image}
      width={300}
      height={300}
      alt={name}/>
    <h3>{name}</h3>
    <Link href={`/recipes/${id}`}>Ver Más</Link>

        </div>

  )
}

export default RecipeCard