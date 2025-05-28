import Image from "next/image"
import Link from "next/link"

const RecipeCard = ({image, name, id}) => {
//SE TIENE QUE USAR UN NEXT LINK
  return (
    <div className='recipe_card'>
    <Image 
      src={image}
      width={300}
      height={300}
      alt={name}/>
    <h3>{name}</h3>
    <a href={"/recipes/" + {id}}>Ver Más</a>

        </div>

  )
}

export default RecipeCard