import Image from "next/image"
import { Cherry_Bomb_One } from "next/font/google"
const CBOfont = Cherry_Bomb_One({
  subsets:["latin"],
  weight:"400",
})

const HeroImage = () => {
  return (
    <div className="hero_image" /*style={{ backgroundImage: `url(/assets/recipes.jpg)`, backgroundSize: 'cover' }}*/>

          <h2 className={`${CBOfont.className}`}>Las mejores recetas para cada ocasión.</h2>
          <p>Todas 100% creadas por mi amigo Jason. Comelas o vendrá por tí.</p>
    </div>
  )
}

export default HeroImage