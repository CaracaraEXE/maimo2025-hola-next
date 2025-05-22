import Image from "next/image"


const Navbar = (props) => {

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
  );
};

export default Navbar;
