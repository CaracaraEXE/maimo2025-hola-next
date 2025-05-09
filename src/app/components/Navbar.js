import Image from "next/image"


const Navbar = (props) => {

  //acá van cosas JS

  const {title, year} = props;

  return (
    <div className="nav_container">
        <Image src="/assets/chefhat.svg" width={50} height={50} alt="Chef Hat Logo"/>
        <h1>{title} {year}</h1>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Categorias</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </nav>
    </div>
    //CLASS NO EXISTE EN REACT, SINO CLASSNAME
    //Nuestro JSX. El JSX solo puede tener un elemento padre, no puede haber hermanos. No puede ver dos DIVS a la misma altura, sino un DIV que encierre a dos DIVS.
  );
};

export default Navbar;
